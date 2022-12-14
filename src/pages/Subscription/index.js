import axios from "axios";
import { Fragment, Suspense, useEffect, useState } from "react";
import { Await, defer, Link, useAsyncValue, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";

import {
  MainContainer,
  ReturnButton,
  PlanName,
  PlanLogo,
  Header,
  TextContainer,
  PerksTitle,
  PerksIcon,
  PerksList,
  Perk,
  PriceTitle,
  PriceIcon,
  Price,
  InputsTop,
  InputsBottom,
  ModalBox,
  ModalText,
  FormButton,
  ModalReturn,
  ButtonContainer,
  ModalConfirm,
  ModalContainer,
  NavButton,
  CloseModalButton
} from "./styled";
import ReturnButtonImage from '../../assets/return_button.svg';
import CloseButtonImage from '../../assets/close_button.svg';
import PerksImage from '../../assets/perks_image.svg';
import PriceImage from '../../assets/price_image.svg';
import {
  Form,
  FormInputs,
  FormButton as ModalSubmit
} from "../../components/Form";

function subscribeClick(e, modalClosed, setModalClosed) {
  e.preventDefault();
  return modalClosed && setModalClosed(!modalClosed);
}

async function submit(e, data, dispatch, state, navigate) {
  e.preventDefault();
  if (state.isLoading)
    return;

  const config = {
    headers: data.headers
  };

  dispatch({ type: 'FORM_SUBMIT' });
  try {
    const response = await axios.post(
      'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',
      data.data,
      config
    );
    const newData = await response.data;
    dispatch({ type: 'SUBSCRIPTION_SUCCESS', payload: newData });
    return navigate('/home');
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    alert('Não foi possível cadastrar o plano');
  }
}

function Modal({ enabled, text, modalClosed, setModalClosed }) {
  const resolvedPlan = useAsyncValue();

  return (
    <ModalBox>
      <ModalText>
        Tem certeza que deseja assinar o plano
        Driven Plus (R$ {resolvedPlan.price.replace('.', ',')})?
      </ModalText>
      <ButtonContainer>
        <ModalReturn
          type='button'
          enabled={enabled}
          onClick={
            (!enabled) ? undefined :
              (() => setModalClosed(1))
          }
        >
          Não
        </ModalReturn>
        <ModalConfirm>
          <ModalSubmit
            enabled={enabled}
            text={text}
            size='small'
          />
        </ModalConfirm>
      </ButtonContainer>
    </ModalBox>
  );
}

function Plan() {
  const resolvedPlan = useAsyncValue();

  return (
    <Fragment>
      <Header>
        <PlanLogo src={resolvedPlan.image} />
        <PlanName>
          {resolvedPlan.name}
        </PlanName>
      </Header>
      <TextContainer>
        <PerksTitle>
          <PerksIcon src={PerksImage} />
          Benefícios:
        </PerksTitle>
        <PerksList>
          {
            resolvedPlan.perks.map(perk => {
              return (
                <Perk key={perk.id}>
                  {perk.title}
                </Perk>
              );
            })
          }
        </PerksList>
        <PriceTitle>
          <PriceIcon src={PriceImage} />
          Preço:
        </PriceTitle>
        <Price>
          R$ {resolvedPlan.price.replace('.', ',')} cobrados mensalmente
        </Price>
      </TextContainer>
    </Fragment>
  );
}

export async function loader({ params }) {
  const token = JSON.parse(localStorage.getItem('drivenplus-cache')).token;

  const planPromise = await axios.get(
    `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return defer({
    plan: planPromise
  });
}

export default function Subscription() {
  const { plan } = useLoaderData();
  const [state, dispatch] = useOutletContext();
  const [topInputsData, setTopInputsData] = useState({
    'Nome impresso no cartão': '',
    'Dígitos do cartão': ''
  });
  const [bottomInputsData, setBottomInputsData] = useState({
    'Código de segurança': '',
    'Validade': ''
  })
  const token = JSON.parse(localStorage.getItem('drivenplus-cache')).token;
  const [modalClosed, setModalClosed] = useState(1);
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem('drivenplus-cache');
  
  useEffect(() => {
    if (!loggedIn) 
      return navigate('/');
  })

  return (

    <MainContainer
      modalClosed={modalClosed}
    >
      <NavButton>
        {
          state.isLoading ? <ReturnButton src={ReturnButtonImage} /> :
            <Link to='/subscriptions'>
              <ReturnButton src={ReturnButtonImage} />
            </Link>
        }
      </NavButton>
      <Suspense
        fallback='Carregando plano selecionado...'
      >
        <Await resolve={plan.data}>
          <Plan />
          <Form
            submit={submit}
            data={
              {
                data: {
                  membershipId: plan.data.id,
                  cardName: topInputsData['Nome impresso no cartão'],
                  cardNumber: topInputsData['Dígitos do cartão'],
                  securityNumber: bottomInputsData['Código de segurança'],
                  expirationDate: bottomInputsData['Validade']
                },
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            }
            dispatch={dispatch}
            state={state}
            navigate={navigate}
          >
            {
              (modalClosed) ? null :
                <ModalContainer>
                  <CloseModalButton
                    onClick={(() => setModalClosed(1))}
                    src={CloseButtonImage}
                  />
                  <Modal
                    enabled={!state.isLoading}
                    text='Sim'
                    modalClosed={modalClosed}
                    setModalClosed={setModalClosed}
                  />
                </ModalContainer>
            }
            <InputsTop>
              <FormInputs
                inputData={topInputsData}
                setInputData={setTopInputsData}
                enabled={!state.isLoading}
              />
            </InputsTop>
            <InputsBottom>
              <FormInputs
                inputData={bottomInputsData}
                setInputData={setBottomInputsData}
                enabled={!state.isLoading}
                size='small'
              />
            </InputsBottom>
            <FormButton
              onClick={(e) => subscribeClick(e, modalClosed, setModalClosed)}
            >
              ASSINAR
            </FormButton>
          </Form>
        </Await>
      </Suspense>
    </MainContainer>
  );
}
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

import logo from '../../assets/login_logo.svg';
import {
  Container,
  Header,
  BottomText
} from './styled';
import {
  FormInputs,
  FormButton,
  Form
} from '../../components/Form';
import axios from 'axios';

async function submit(e, data, dispatch, state, navigate) {
  e.preventDefault();
  if (state.isLoading)
    return;

  dispatch({ type: 'FORM_SUBMIT' });
  try {
    const response = await axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
      data);
    const newData = await response.data;
    localStorage.setItem('drivenplus-cache', JSON.stringify(newData));
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: newData
    });
    return newData.membership ? navigate('/home') :
      navigate('/subscriptions');
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    alert('Não foi possível realizar o login');
  }
}

export default function Login() {
  const [state, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    "E-mail": "",
    Senha: ""
  });
  const navigate = useNavigate();
  const formattedData = {
    email: inputData['E-mail'],
    password: inputData.Senha
  };

  return (
    <Container>
      <Header src={logo} />
      <Form
        submit={submit}
        data={formattedData}
        dispatch={dispatch}
        state={state}
        navigate={navigate}
      >
        <FormInputs
          enabled={!state.isLoading}
          inputData={inputData}
          setInputData={setInputData}
        />
        <FormButton
          url='https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
          dispatch={dispatch}
          enabled={!state.isLoading}
          text='ENTRAR'
        />
      </Form>
      <BottomText>
        Não possui uma conta?&nbsp;
        <Link to='/sign-up'>
          Cadastre-se
        </Link>
      </BottomText>
    </Container>
  );
}
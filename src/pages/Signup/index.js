import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

import {
  FormInputs,
  FormButton,
  Form
} from '../../components/Form';
import {
  Container,
  BottomText
} from './styled';

async function submit(e, data, dispatch, state, navigate) {
  e.preventDefault();
  if (state.isLoading)
    return;

  dispatch({ type: 'FORM_SUBMIT' });
  try {
    await axios.post(
      'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up',
      data);
    dispatch({ type: 'RESPONSE_RESOLVED' });
    return navigate('/');
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    throw new Error(e);
  }
}

export default function Signup() {
  const [state, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    Nome: '',
    CPF: '',
    'E-mail': '',
    Senha: ''
  });
  const navigate = useNavigate();
  const formattedData = {
    email: inputData['E-mail'],
    name: inputData.Nome,
    cpf: inputData.CPF,
    password: inputData.Senha
  }

  return (
    <Container>
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
          enabled={!state.isLoading}
          text='CADASTRAR'
        />
      </Form>
      <BottomText>
        Já possui uma conta?&nbsp;
        <Link to='/'>
          Entre
        </Link>
      </BottomText>
    </Container>
  );
}
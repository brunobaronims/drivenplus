import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

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

export default function Login() {
  const [state, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    "E-mail": "",
    Senha: ""
  });

  return (
    <Container>
      <Header src={logo} />
      <Form>
        <FormInputs 
          enabled={!state.isLoading}
          inputData={inputData}
          setInputData={setInputData}
        />
        <FormButton
          url='https://mock-api.driven.com.br/api/v4/driven-plus/auth/login' 
          dispatch={dispatch}
          enabled={!state.isLoading}
          text='CADASTRAR'
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
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/login_logo.svg';
import {
  Container,
  Header,
  BottomText
} from './styled';
import Form from '../../components/Form';

export default function Login() {
  const [inputData, setInputData] = useState({
    "E-mail": "",
    Senha: ""
  })

  return (
    <Container>
      <Header src={logo} />
      <Form
        inputData={inputData}
        setInputData={setInputData}
      />
      <BottomText>
        Não possui uma conta?&nbsp;
        <Link to='/cadastro'>
          Cadastre-se
        </Link>
      </BottomText>
    </Container>
  );
}
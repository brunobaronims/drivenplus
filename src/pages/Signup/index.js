import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  BottomText
} from './styled';
import Form from '../../components/Form';

export default function Register() {
  const [inputData, setInputData] = useState({
    Nome: '',
    CPF: '',
    'E-mail': '',
    Senha: ''
  });

  return (
    <Container>
      <Form
        inputData={inputData}
        setInputData={setInputData}
      />
      <BottomText>
        Já possui uma conta?&nbsp;
        <Link to='/'>
          Entre
        </Link>
      </BottomText>
    </Container>
  );
}
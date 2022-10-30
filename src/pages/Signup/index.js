import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import {
  FormInputs,
  FormButton,
  Form
} from '../../components/Form';
import {
  Container,
  BottomText
} from './styled';

export default function Signup() {
  const [state, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    Nome: '',
    CPF: '',
    'E-mail': '',
    Senha: ''
  });

  return (
    <Container>
      <Form>
        <FormInputs
          enabled={!state.isLoading}
          inputData={inputData}
          setInputData={setInputData}
        />
        <FormButton
          enabled={!state.isLoading}
          text='ENTRAR'
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
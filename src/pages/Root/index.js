import { Outlet } from "react-router-dom";
import { useReducer } from 'react';
import { Container } from "./styled";

const initialState = {
  isLoading: 0,
  userData: {}
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'FORM_SUBMIT':
      return (
        { ...state, isLoading: 1 }
      );
    case 'RESPONSE_RESOLVED':
      return (
        { ...state, isLoading: 0 }
      );
    case 'LOGIN_SUCCESS':
      return (
        { ...state, isLoading: 0, userData: payload }
      );
    default:
      throw new Error();
  }
};

export default function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    <Container>
      <Outlet context={[state, dispatch]} />
    </Container>
  );
};
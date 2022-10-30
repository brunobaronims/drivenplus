import { Outlet } from "react-router-dom";
import { useReducer } from 'react';

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
        { ...state, userData: payload }
      );
    default:
      throw new Error();
  }
};

export default function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Outlet context={[state, dispatch]} />
  );
};
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useReducer } from 'react';
import { Container } from "./styled";
import { useEffect } from "react";

const initialState = {
  isLoading: 0,
  userData: {},
  planData: {
    "id": 1,
    "name": "Driven Plus",
    "image": "https://svgshare.com/i/dSP.svg",
    "price": "39.99",
    "perks": [
      {
        "id": 1,
        "membershipId": 1,
        "title": "Solicitar brindes",
        "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        "id": 2,
        "membershipId": 1,
        "title": "Materiais bônus de web",
        "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ]
  }
};

//function checkCache(dispatch, navigate, state, pathname) {
//  if (!localStorage.getItem('drivenplus-cache') || state.loggedIn)
//    return;
//  dispatch({ type: 'FORM_SUBMIT' });
//  const userData = JSON.parse(localStorage.getItem('drivenplus-cache'));
//  dispatch({
//    type: 'LOGIN_SUCCESS',
//    payload: userData
//  });
//  return navigate('/home');
//}

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
        { ...state, isLoading: 0, userData: payload, loggedIn: 1 }
      );
    case 'SUBSCRIPTION_SUCCESS':
      return (
        { ...state, isLoading: 0, planData: payload }
      );
    default:
      throw new Error();
  }
};

export default function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //useEffect(() => {
  //  checkCache(dispatch, navigate, state, pathname);
  //})

  return (
    <Container>
      <Outlet context={[state, dispatch]} />
    </Container>
  );
};
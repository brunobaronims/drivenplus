import { Outlet } from "react-router-dom";
import { useReducer } from 'react';

const initialState = {
  isLoading: 0,
  userData: {}
};

function reducer(state, { type, payload }) {
  return state;
};

export default function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Outlet context={[state, dispatch]} />
  );
};
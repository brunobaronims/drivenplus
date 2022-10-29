import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { GlobalStyle } from './globalStyle';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <Signup />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
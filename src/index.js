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
import SubscriptionsList, {
  loader as subscriptionsListLoader
} from './pages/SubscriptionsList';
import Subscription, { loader as subscriptionLoader } from './pages/Subscription';
import Home from './pages/Home';

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
      },
      {
        path: '/subscriptions',
        loader: subscriptionsListLoader,
        element: <SubscriptionsList />
      },
      {
        path: '/subscriptions/:id',
        loader: subscriptionLoader,
        element: <Subscription />
      },
      {
        path: '/home',
        element: <Home />
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
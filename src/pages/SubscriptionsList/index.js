import axios from "axios";
import { Suspense } from "react";
import { Await, defer, Link, useAsyncValue, useLoaderData } from "react-router-dom";

import {
  Container,
  List,
  Item,
  HeaderText,
  PriceText,
  Image
} from './styled';

function Plans() {
  const resolvedPlans = useAsyncValue();

  return (
    resolvedPlans.map(plan => {
      return (
        <Link
          to={`/subscriptions/${plan.id}`}
          key={plan.id}
        >
          <Item>
            <Image src={plan.image} />
            <PriceText>
              R$ {plan.price.replace('.', ',')}
            </PriceText>
          </Item>
        </Link>
      );
    })
  );
}

export async function loader() {
  const token = JSON.parse(localStorage.getItem('drivenplus-cache')).token;

  const plansPromise = await axios.get(
    'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return defer({
    plans: plansPromise
  });
}

export default function SubscriptionsList() {
  const { plans } = useLoaderData();

  return (
    <Container>
      <HeaderText>
        Escolha seu Plano
      </HeaderText>
      <List>
        <Suspense
          fallback='Carregando planos...'
        >
          <Await resolve={plans.data}>
            <Plans />
          </Await>
        </Suspense>
      </List>
    </Container>
  );
}
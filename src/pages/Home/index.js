import { useNavigate, useOutletContext, Link } from "react-router-dom";
import axios from "axios";

import {
  Header,
  NavIcons,
  HeaderLogo,
  HeaderText,
  ProfileImage,
  Perks,
  Perk,
  ChangePlan,
  DeletePlan,
  Container
} from './styled';
import { useEffect } from "react";

async function deletePlan(navigate, dispatch, token) {
  dispatch({ type: 'FORM_SUBMIT' });
  try {
    await axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({  type: 'RESPONSE_RESOLVED' });
    return navigate('/subscriptions');
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    throw new Error(e);
  }
}

export default function Home() {
  const [ state, dispatch] = useOutletContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!state.loggedIn) 
      return navigate('/');
  })
  if (!state.loggedIn) 
    return null;
  return (
    <Container>
      <Header>
        <NavIcons>
          <HeaderLogo src={state.userData.membership.image} />
          <ProfileImage src={state.userData.image} />
        </NavIcons>
        <HeaderText>
          Olá, {state.userData.name}
        </HeaderText>
      </Header>
      <Perks>
        {
          state.userData.membership.perks.map(perk => {
            return (
              <Perk
                key={perk.id}
                href={perk.link}
              >
                {perk.title}
              </Perk>
            );
          })
        }
      </Perks>
      <Link to='/subscriptions'>
        <ChangePlan>
          Mudar plano
        </ChangePlan>
      </Link>
      <DeletePlan onClick={() => deletePlan(navigate, dispatch, state.userData.token)}>
        Cancelar plano
      </DeletePlan>
    </Container>
  );
}
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
  const [{ planData }, dispatch] = useOutletContext();
  const userData = JSON.parse(localStorage.getItem('drivenplus-cache'));
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem('trackit-cache');

  useEffect(() => {
    return loggedIn || navigate('/');
  })

  return (
    <Container>
      <Header>
        <NavIcons>
          <HeaderLogo src={userData.membership.image} />
          <ProfileImage src={userData.image} />
        </NavIcons>
        <HeaderText>
          Olá, {userData.name}
        </HeaderText>
      </Header>
      <Perks>
        {
          userData.membership.perks.map(perk => {
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
      <DeletePlan onClick={() => deletePlan(navigate, dispatch, userData.token)}>
        Cancelar plano
      </DeletePlan>
    </Container>
  );
}
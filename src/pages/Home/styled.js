import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
`;

export const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  height: auto;
  width: 2rem;
`;

export const ProfileImage = styled.img`
  border-radius: 1rem;
  height: 2rem;
  width: 2rem;
`;

export const HeaderText = styled.h1`
  color: #FFF;
  text-align: center;
`;

export const Perks = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Perk = styled.a`
  display: flex;
  align-items: center;
  background: #FF4791;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  height: 2rem;
  width: 18rem;
  border-radius: 0.5rem;
`;

export const ChangePlan = styled.button`
  display: flex;
  align-items: center;
  background: #FF4791;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  height: 2rem;
  width: 18rem;
  border-radius: 0.5rem;
`;

export const DeletePlan = styled.button`
  display: flex;
  align-items: center;
  background: #FF4747;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  height: 2rem;
  width: 18rem;
  border-radius: 0.5rem;
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1.4rem 1.6rem;
`;

export const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  height: 2.6rem;
  width: auto;
`;

export const ProfileImage = styled.img`
  border-radius: 1rem;
  height: 2rem;
  width: 2rem;
`;

export const HeaderText = styled.h1`
  color: #FFF;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Perks = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const Perk = styled.a`
  display: flex;
  align-items: center;
  background: #FF4791;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  height: 3rem;
  width: 18rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
`;

export const BottomLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const ChangePlan = styled.button`
  display: flex;
  align-items: center;
  background: #FF4791;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  height: 3rem;
  width: 18rem;
  border-radius: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
`;

export const DeletePlan = styled.button`
  display: flex;
  align-items: center;
  background: #FF4747;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  height: 3rem;
  width: 18rem;
  border-radius: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;
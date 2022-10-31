import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  & {
  opacity: ${props => props.modalClosed ? 'initial' : '50%'}
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.2rem;
  height: 4rem;
  position: fixed;
  top: 0;
  background: #0E0E13;
`;

export const ReturnButton = styled.img`

`;

export const CloseModalButton = styled.img`

`;

export const PlanLogo = styled.img`
  height: auto;
  width: 8rem;
  margin-bottom: 0.6rem;
`;

export const PlanName = styled.h1`
  color: #FFF;
  font-size: 1.8rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0 1.2rem 0;
  width: 10rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  width: 18rem;
  margin-bottom: 1.6rem;
`;

export const PerksTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.6rem;
`;

export const PerksIcon = styled.img`
  margin-right: 0.4rem;
`;

export const PerksList = styled.ol`
  list-style: decimal inside;
  margin-bottom: 0.6rem;
`;

export const Perk = styled.li`

`;

export const PriceTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.2rem;
`;

export const PriceIcon = styled.img`

`;

export const Price = styled.p`

`;

export const InputsTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputsBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const FormButton = styled.button` 
  background: #FF4791;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  border: none;
  border-radius: 0.3rem;
  height: 2.7rem;
  width: 18rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1.2rem;

  &:active {
    transform: ${props => props.enabled ? 'scale(0.9)' : 'none'};
  }
  &:focus {
    outline: none;
  }
`;

export const ModalContainer = styled.div`
  background: #FFF;
  position: fixed;
  height: 8rem;
  width: 12rem;
  top: calc(50% - 4rem);
  left: calc(50% - 6rem);
  
  &&& {
    opacity: 100%;
  }
`;

export const ModalText = styled.p`
  color: #000;
`;

export const ModalReturn = styled.button`
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ModalConfirm = styled.div`
`;
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
  display: flex;
  flex-direction: column;
  background: #FFF;
  position: fixed;
  height: 10rem;
  width: 13rem;
  top: calc(50% - 5rem);
  left: calc(50% - 6.5rem);
  border-radius: 0.6rem;
  padding: 0.5rem 1.2rem;
  justify-content: space-between;
  
  &&& {
    opacity: 100%;
  }
`;

export const ModalText = styled.p`
  color: #000;
  font-weight: 700;
  margin-top: 1rem;
`;

export const ModalReturn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CECECE;
  opacity: ${props => props.enabled ? '1' : '0.6'};
  cursor: ${props => props.enabled ? 'pointer' : 'initial'};
  color: #FFF;
  border: none;
  border-radius: 0.3rem;
  height: 2.7rem;
  width: 5rem;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  &:active {
    transform: ${props => props.enabled ? 'scale(0.9)' : 'none'};
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalConfirm = styled.div`
`;
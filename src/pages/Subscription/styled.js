import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  & {
  opacity: ${props => props.modalClosed ? 'initial' : '50%'}
  }
`;

export const ReturnButton = styled.img`

`;

export const PlanLogo = styled.img`

`;

export const PlanName = styled.h1`
  color: #FFF;
`;

export const Header = styled.div`

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
`;

export const PerksTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PerksIcon = styled.img`

`;

export const PerksList = styled.ol`
  list-style: decimal inside;

`;

export const Perk = styled.li`

`;

export const PriceTitle = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const FormButton = styled.button` 
  background: #FF4791;
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
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background: ${props => props.enabled ? '#FFF' : 'rgba(255, 255, 255, 0.7)'};
  cursor: ${props => props.enabled ? 'text' : 'default'};
  color: ${props => props.enabled ? 'inital' : 'transparent'};
  text-shadow: 0 0 0 #666666;
  border: none;
  border-radius: 0.3rem;
  width: ${props => props.small ? '8.7rem' : '18rem'};
  spellcheck: false;
  margin-bottom: 0.85rem;
  padding-left: ${props => props.small ? '0.4rem' : '0.8rem'};
  height: 2.7rem;
  font-weight: 400;
  font-size: 0.8rem;
  &:focus {
  outline: none;
  spellcheck: false;
  }
  ::placeholder {
    color: #7E7E7E;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FF4791;
  opacity: ${props => props.enabled ? '1' : '0.6'};
  cursor: ${props => props.enabled ? 'pointer' : 'initial'};
  color: #FFF;
  border: none;
  border-radius: 0.3rem;
  height: 2.7rem;
  width: ${props => props.small ? '5rem' : '18rem'};
  margin: ${props => props.small ? '0' : '0.5rem 0 1.4rem 0'};
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
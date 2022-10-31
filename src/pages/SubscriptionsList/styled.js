import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.8rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  border: 0.2rem solid #7E7E7E;
  border-radius: 0.5rem;
  height: 10rem;
  margin-bottom: 0.8rem;
  align-items: center;
  padding-left: 1rem;
`;

export const Image = styled.img`
  width: auto;
  height: 6rem;
`;

export const HeaderText = styled.h1`
  text-align: center;
  color: #FFF;
  margin-bottom: 1.4rem;
  font-weight: 700;
`;

export const PriceText = styled.p`
  color: #FFF;
  margin-left: 1.5rem;
`;
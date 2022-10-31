import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  ol, ul,
  button,
  p,
  h1 {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: #0E0E13;
  }
  ul {
    list-style: none;
  }
  button {
    background-color: inherit;
    border: none;
  }
`;
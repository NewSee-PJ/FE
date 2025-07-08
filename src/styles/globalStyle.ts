import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: "Pretendard", sans-serif;
    background-color: ${({ theme }) => theme.colors.bg.white};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  input, textarea {
    outline: none;
    border: none;
    font-family: inherit;
  }

`;

export default GlobalStyle;

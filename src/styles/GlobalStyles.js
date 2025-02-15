// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f7f7f7;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
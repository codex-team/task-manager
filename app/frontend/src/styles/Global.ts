import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'SF Pro Display', sans-serif;
  }

  h1 {
    margin: 0
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

/**
 * CSS styles globally applied
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

import { createGlobalStyle } from 'styled-components';

/**
 * CSS styles globally applied
 */
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    color: var(--color-text-dark);
    margin: 0
  }
`;

export default GlobalStyles;

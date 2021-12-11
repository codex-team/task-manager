import { createGlobalStyle } from 'styled-components';

/**
 * CSS styles globally applied
 */
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: var(--color-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1, p {
    margin: 0
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyles;

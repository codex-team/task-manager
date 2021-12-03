import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-bg-main: #FFFFFF;

    /**
     * Text colors variables
     */
    --color-text-dark: #1D2331;
    --color-text-gray: #8D8D8D;
    --color-text-light: #E9F2FF;
    --color-text-light-secondary: #9CA3AD;
    --color-text-white: #FFFFFF;
  }
`;

export default ColorVariables;

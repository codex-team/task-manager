import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-bg-main: #FFFFFF;
    --color-accent: #387CE1;


    /**
     * Text colors variables
     */
    --color-text-primary: #1D2331;
    --color-text-secondary: #8D8D8D;
    --color-text-primary-reversed: #E9F2FF;
    --color-text-secondary-reversed: #9CA3AD;

    /**
     * Card component colors variables
     */
    --color-line: #F4F4F4;
    --color-line-hover: #D6D6D6;
    --color-line-active: #1D2331;
    --color-bg-active: #1D2331;

  }
`;

export default ColorVariables;

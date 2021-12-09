import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-accent: #387CE1;

    --color-bg-main: #FFFFFF;

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
    --color-card-border: #F4F4F4;
    --color-card-border-hover: #D6D6D6;
    --color-card-border-active: #1D2331;
    --color-card-bg-active: #1D2331;

  }
`;

export default ColorVariables;

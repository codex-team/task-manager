import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-gray-1: #F4F4F4;
    --color-gray-2: #EBEBEB;
    --color-gray-3: #DBDBDB;
    --color-gray-4: #D6D6D6;
    --color-gray-5: #8D8D8D;
    --color-gray-6: #1D2331;

    --color-bg-main: #FFFFFF;
    --color-text-dark: var(--color-gray-6);
  }
`;

export default ColorVariables;

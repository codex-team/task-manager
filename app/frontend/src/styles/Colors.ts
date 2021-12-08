import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-gray-1: #F4F4F4;
    --color-gray-2: #EBEBEB;
    --color-gray-3: #DBDBDB;
    --color-gray-4: #D6D6D6;
    --color-gray-5: #8D8D8D;
    --color-gray-6: #1D2331;

    --color-bg-main: #FFFFFF;
    --color-accent: #387CE1;
    --color-contrast: #1D2331;

    /**
     * Text colors variables
     */
    --color-text-primary: var(--color-gray-6);
    --color-text-secondary: var(--color-gray-5);
    --color-text-primary-reversed: #E9F2FF;
    --color-text-secondary-reversed: #9CA3AD;


    /**
     * Image preview component colors
     */
     --color-image-preview-border: var(--color-gray-4);
     --color-image-preview-text: var(--color-gray-3);
     --color-image-preview-border-hover: var(--color-gray-5);
     --color-image-preview-text-hover: var(--color-gray-5);
     --color-image-preview-text-filled: var(--color-white);


     /**
      * Input component colors
      */
     --color-input-border: var(--color-gray-2);
     --color-input-border-hover: var(--color-gray-4);
     --color-input-border-focus: var(--color-gray-6);


  }
`;

export default ColorVariables;

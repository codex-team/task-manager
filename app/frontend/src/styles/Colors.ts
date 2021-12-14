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

    --color-bg-main: #FFFFFF;
    --color-accent: #387CE1;
    --color-contrast: #1D2331;

    /**
     * Text colors variables
     */
    --color-text-primary: var(--color-contrast);
    --color-text-secondary: var(--color-gray-5);
    --color-text-primary-reversed: #E9F2FF;
    --color-text-secondary-reversed: #9CA3AD;

    /**
     * Lines colors variables
     */
    --color-line: var(--color-gray-2);
    --color-line-hover: var(--color-gray-4);
    --color-line-active: var(--color-contrast);

    /**
     * Image preview component colors
     */
     --color-image-preview-border: var(--color-gray-4);
     --color-image-preview-text: var(--color-gray-3);
     --color-image-preview-border-hover: var(--color-gray-5);
     --color-image-preview-text-hover: var(--color-gray-5);
     --color-image-preview-text-filled: var(--color-white);
  }
`;

export default ColorVariables;

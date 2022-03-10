import { css, FlattenSimpleInterpolation } from 'styled-components';

/**
 * Contains font settings for UI components (e.g. Input or ImageUploader)
 */
const UiComponentText = (): FlattenSimpleInterpolation => css`
  font-size: 14px;
  letter-spacing: -0.005em;
`;

/**
 * Font settings for subtitle
 */
const SubtitleText = (): FlattenSimpleInterpolation => css`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-text-primary);
  letter-spacing: -0.005em;
  line-height: 120%;
`;

/**
 * Font settings for small subtitle text
 */
const SubtitleTextSmall = (): FlattenSimpleInterpolation => css`
  font-size: 12px;
  font-weight: 600;
  line-height: 120%;
`;

export {
  UiComponentText,
  SubtitleText,
  SubtitleTextSmall
};
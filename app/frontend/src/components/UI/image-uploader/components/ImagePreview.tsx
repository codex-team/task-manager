import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'components/icons/plus.svg';

/**
 * ImagePreview component props model
 */
interface Props {
  /**
   * Url to image
   */
  imageSrc: string

  /**
   * Click handler
   */
  onClick: () => void
}

/**
 * ImagePreview styled component
 *
 * @param props - props of the component
 */
const ImagePreviewStyled = styled.button<Props>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: url(${props => props.imageSrc});
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px dashed var(--color-image-preview-border);
  color: var(--color-image-preview-text);
  svg {
    z-index: 2;
    position: relative;
  }
  ${props => !props.imageSrc && `

    &:hover {
      border: 1px dashed var(--color-image-preview-border-hover);
      color: var(--color-image-preview-text-hover);
    }
  `}
  ${props => props.imageSrc && `
    color: var(--color-image-preview-text-filled);
    border: none;
    &::before {
      content: '';
      background: black;
      opacity: 0.3;
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  `}
`;

/**
 * ImagePreview component
 *
 * @param props - props of the component
 */
const ImagePreview: React.FC<Props> = (props) => {
  return (
    <ImagePreviewStyled { ...props } onClick={ props.onClick }>
      <PlusIcon fill='currentColor' width='20' height='20'/>
    </ImagePreviewStyled>
  );
};

export default ImagePreview;

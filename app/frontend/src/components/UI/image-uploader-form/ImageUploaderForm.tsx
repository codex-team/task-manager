import styled from 'styled-components';
import ImageUploader from 'components/UI/image-uploader/ImageUploader';
import { ImageUploaderProps, ImageUploaderRefType } from 'components/UI/image-uploader/ImageUploader';
import { createRef, useState } from 'react';
import labeled from 'components/UI/labeled/Labeled';

const PROMPT_HAS_VALUE = 'Change picture';
const PROMPT_EMPTY = 'Upload picture';

/**
 * ImageUploaderForm props model
 */
interface Props extends ImageUploaderProps {
  /**
   * ImageUploaderForm label
   */
   label?: string

  /**
   * Prompt that should be displayed when no image is selected
   */
  promptEmpty?: string

  /**
   * Prompt that should be displayed when image is selected
   */
  promptHasValue?: string
}

const Wrapper = styled.div<{ hasValue: boolean}>`
  display: flex;
  align-items: center;
  height: 48px;
  color: var(--color-text-secondary);
  font-size: 14px;
  letter-spacing: -0.005em;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    color: var(--color-text-primary);
  }

  ${props => !props.hasValue && `
  
    &:hover {
      button {
        border: 1px dashed var(--color-image-preview-border-hover);
        color: var(--color-image-preview-text-hover);
      }
    }
  
  `}
`;

/**
 * Styled ImageUploader component
 */
const StyledImageUploader = styled(ImageUploader)`
  margin-right: 12px;
`;


/**
 * ImageUploaderForm component
 *
 * @param props - props of the component
 */
const ImageUploaderForm: React.FC<Props> = (props: Props) => {
  const [hasUploadedFile, setHasUploadedFile] = useState(!!props.previewUrl);
  const uploader = createRef<ImageUploaderRefType>();
  const prompt = hasUploadedFile
    ? (props.promptHasValue || PROMPT_HAS_VALUE)
    : (props.promptEmpty || PROMPT_EMPTY);

  const onClick = (): void => {
    uploader.current?.openDialog();
  };

  const handleChange = (fileUploaded: File): void => {
    setHasUploadedFile(!!fileUploaded);
    props.onChange(fileUploaded);
  };

  return (
    <Wrapper hasValue={ hasUploadedFile }>
      <StyledImageUploader { ...props } onChange={ handleChange } ref={ uploader }/>
      <p onClick={ onClick }>{ prompt }</p>
    </Wrapper>
  );
};

export default labeled(ImageUploaderForm);
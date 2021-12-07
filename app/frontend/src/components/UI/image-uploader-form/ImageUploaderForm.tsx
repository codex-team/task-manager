import styled from 'styled-components';
import ImageUploader from 'components/UI/image-uploader/ImageUploader';
import { Props as ImageUploaderProps, RefType } from 'components/UI/image-uploader/ImageUploader';
import { createRef, useState } from 'react';

const PROMPT_HAS_VALUE = 'Change picture';
const PROMPT_EMPTY = 'Upload picture';

/**
 * ImageUploaderForm props model
 */
interface Props extends ImageUploaderProps {
  /**
   * ImageUploaderForm label
   */
   label: string

  /**
   * Prompt that should be displayed when no image is selected
   */
  promptEmpty: string

  /**
   * Prompt that should be displayed when image is selected
   */
  promptHasValue: string
}

const Wrapper = styled.div<{ label: string, description: string, hasValue: boolean}>`
  display: flex;
  align-items: center;
  height: 48px;
  width: 309px;
  color: var(--color-gray-5);
  font-size: 14px;
  letter-spacing: -0.005em;
  cursor: pointer;
  transition: border 0.15s;

  &:hover {
    color: var(--color-gray-6);
  }

  ${props => !props.hasValue && `
  
    &:hover {
      button {
        border: 1px dashed var(--color-gray-5);
        color: var(--color-gray-5);
      }
    }
  
  `}


  & > *:not(:last-child) {
    margin-right: 12px
  }

  ${props => (props.label || props.children) && `
    margin-top: 12px;
  `}

`;

/**
 * ImageUploader description component
 */
const Description = styled.p`
  font-size: 14px;
  color: var(--color-gray-5);
  margin-top: 4px;
`;

/**
 * Label component.
 */
const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;


/**
 * ImageUploaderForm component
 *
 * @param props - props of the component
 */
const ImageUploaderForm: React.FC<Props> = (props) => {
  const [hasUploadedFile, setHasUploadedFile] = useState(!!props.previewUrl);
  const uploader = createRef<RefType>();
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
    <div>
      { props.label && <Label htmlFor={ props.id }>{ props.label }</Label> }
      { props.children && <Description>{ props.children }</Description> }
      <Wrapper label={ props.label } description={ props.children as string } hasValue={ hasUploadedFile }>
        <ImageUploader { ...props } onChange={ handleChange } ref={uploader}/>
        <p onClick={ onClick }>{ prompt }</p>
      </Wrapper>
    </div>
  );
};

export default ImageUploaderForm;
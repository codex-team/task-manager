import React, { MutableRefObject, useState } from 'react';
import styled from 'styled-components';
import ImagePreview from './components/ImagePreview';

const PROMPT_HAS_VALUE = 'Change picture';
const PROMPT_EMPTY = 'Upload picture';
const ACCEPT = 'image/png, image/gif, image/jpeg';

/**
 * FileUploader component props model
 */
interface Props {
  /**
   * FileUploader label
   */
  label: string

  /**
   * String that defines the file types the file input should accept
   */
  accept: string

  /**
   * Url of the image to be displayed in image preview
   */
  previewUrl: string

  /**
   * Prompt that should be displayed when no image is selected
   */
  promptEmpty: string

  /**
   * Prompt that should be displayed when image is selected
   */
  promptHasValue: string

  /**
   * Value changle handler
   */
  onChange: (file: File) => void
}

const Container = styled.div`

`;

const Wrapper = styled.div<{ label: string, description: string }>`
  display: flex;
  align-items: center;
  height: 48px;
  width: 309px;
  color: var(--color-gray-5);
  font-size: 14px;
  letter-spacing: -0.005em;
  cursor: pointer;
  &:hover {
    color: var(--color-gray-6);
  }


  & > *:not(:last-child) {
    margin-right: 12px
  }

  ${props => (props.label || props.children) && `
    margin-top: 12px;
  `}

`;

/**
 * FileUploader description component
 */
const Description = styled.p`
  font-size: 14px;
  color: var(--color-gray-5);
  margin-top: 4px;
`;

/**
 * Label wrapper component.
 */
const LabelWrapper = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

/**
 * Returns data url of uploaded file
 *
 * @param file - file to read
 */
const getFilePreview = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject();

    reader.readAsDataURL(file);
  });
};

/**
 * FileUploader component
 *
 * @param props - props of the component
 */
const FileUploader: React.FC<Props> = (props) => {
  const hiddenFileInput: MutableRefObject<HTMLInputElement | null> = React.useRef(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const prompt = previewUrl
    ? (props.promptHasValue || PROMPT_HAS_VALUE)
    : (props.promptEmpty || PROMPT_EMPTY);

  if (props.previewUrl && props.previewUrl !== previewUrl) {
    setPreviewUrl(props.previewUrl);
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!event.target.files || !props.onChange) {
      return;
    }
    const fileUploaded = event.target.files[0];

    if (fileUploaded) {
      setPreviewUrl(await getFilePreview(fileUploaded));
    }
    props.onChange(fileUploaded);
  };

  const handleClick = (): void => {
    hiddenFileInput.current?.click();
  };

  return (
    <Container>
      { props.label && <LabelWrapper><label htmlFor="input">{props.label}</label></LabelWrapper> }
      { props.children && <Description>{props.children}</Description> }
      <Wrapper onClick={handleClick} label={ props.label } description={ props.children as string }>
        <input
          type="file"
          accept={props.accept || ACCEPT}
          hidden ref={hiddenFileInput}
          onChange={handleChange}
        />
        <ImagePreview imageSrc={previewUrl}/>
        <p>{ prompt }</p>
      </Wrapper>
    </Container>
  );
};

export default FileUploader;
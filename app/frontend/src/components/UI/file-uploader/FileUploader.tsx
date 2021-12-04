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
   * Image uploader disabled state
   */
  disabled: boolean

  /**
   * Image uploader required state
   */
  required: boolean

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
  display: flex;
  align-items: center;
  height: 48px;
  width: 309px;
  cursor: pointer;
  color: var(--color-gray-5);
  font-size: 14px;
  letter-spacing: -0.005em;

  &:hover {
    color: var(--color-gray-6);
  }

  & > *:not(:last-child) {
    margin-right: 12px
  }
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
    <Container onClick={handleClick}>
      <input
        type="file"
        accept={props.accept || ACCEPT}
        disabled={props.disabled}
        hidden ref={hiddenFileInput}
        onChange={handleChange}
      />
      <ImagePreview imageSrc={previewUrl}/>
      <p>{ prompt }</p>
    </Container>
  );
};

export default FileUploader;
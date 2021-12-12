import React, { useState, MutableRefObject, useImperativeHandle, forwardRef } from 'react';
import ImagePreview from './components/ImagePreview';

const ACCEPT = 'image/png, image/gif, image/jpeg';

/**
 * Type of ImageUploader component reference
 */
export interface ImageUploaderRefType {
  /**
   * Opens file input dialog
   */
  openDialog: () => void
}

/**
 * ImageUploader component props model
 */
export interface ImageUploaderProps {
  /**
   * Input component id
   */
  id: string

  /**
   * String that defines the file types the file input should accept
   */
  accept: string

  /**
   * Url of the image to be displayed in image preview
   */
  previewUrl: string

  /**
   * Value changle handler
   */
  onChange: (file: File) => void

  /**
   * Component ref.
   * Allows to call component method from outside
   */
  ref: ImageUploaderRefType

  /**
   * CSS class name
   */
  className: string
}

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
 * ImageUploader component
 *
 * @param props - props of the component
 * @param ref - contains ref to component
 */
const ImageUploader = forwardRef<ImageUploaderRefType, ImageUploaderProps>((props, ref) => {
  const hiddenFileInput: MutableRefObject<HTMLInputElement | null> = React.useRef(null);
  const [previewUrl, setPreviewUrl] = useState(props.previewUrl);

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

  const openDialog = (): void => {
    hiddenFileInput?.current?.click();
  };

  useImperativeHandle(ref, () => ({
    openDialog,
  }));

  return (
    <div className={ props.className }>
      <input
        id={ props.id }
        type="file"
        accept={ props.accept || ACCEPT }
        hidden ref={ hiddenFileInput }
        onChange={ handleChange }
      />
      <ImagePreview onClick={ openDialog } imageSrc={ previewUrl }/>
    </div>
  );
});

export default ImageUploader;

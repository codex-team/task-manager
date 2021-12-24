import React from 'react';
import styled from 'styled-components';
import Popup from 'components/layouts/popup/Popup';
import { ReactComponent as CloseIcon } from 'icons/close.svg';

/**
 * Interface for popup wrapper component props
 */
interface Props{
  /**
   * Function to change visible property
   */
  backDropClick: () => void;

  /**
   * Property, is popup visible
   */
  isPopupVisible: boolean;
}

/**
 * Styled close button
 */
const CloseButton = styled.div`
  cursor: pointer;
  top: 45px;
  right: 45px;
  width: 17px;
  height: 17px;
  position: absolute;
`;

/**
 * Styled popup content
 */
const PopupContent = styled.div`
  width: 1000px;
  padding: 40px;
  position: relative;
  background-color: white;
  min-height: 500px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Popup wrapper component
 *
 * @param props - props of component
 */
const PopupWrapper: React.FC<Props> = (props) => {
  if (!props.isPopupVisible) {
    return null;
  }

  return (
    <Popup backDropClick={props.backDropClick}>
      <PopupContent>
        <CloseButton onClick={props.backDropClick}>
          <CloseIcon/>
        </CloseButton>
        {props.children}
      </PopupContent>
    </Popup>
  );
};

export default PopupWrapper;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { stopPropagation } from 'helpers/helpers';

/**
 * Interface for popup component props
 */
interface Props {
  backDropClick: () => void;
}

/**
 * Popup component
 *
 * @param props - props of component
 */
const Popup: React.FC<Props> = ({ children, backDropClick }) => {
  const popupContainer = document.getElementById('popup-root');

  const KEYBOARD_ESC = 'Escape';

  useEffect(() => {
    const escFunction = function (event: KeyboardEvent): void {
      if (event.key === KEYBOARD_ESC) {
        backDropClick();
      }
    };

    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  },[ backDropClick ]);

  return ReactDOM.createPortal(
    <PopupStyled onClick={backDropClick}>
      <div onClick={stopPropagation}>
        {children}
      </div>
    </PopupStyled>,
    popupContainer? popupContainer: document.body
  );
};

/**
 * Styled popup component
 */
const PopupStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
`;

export default Popup;

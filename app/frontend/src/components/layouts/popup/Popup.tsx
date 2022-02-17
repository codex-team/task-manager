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

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', escFunction);
    };
  }, [ backDropClick ]);

  return ReactDOM.createPortal(
    <PopupStyled onClick={ backDropClick }>
      <div onClick={ stopPropagation }>
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
  cursor: pointer;
  z-index: 2;
  padding-top: 20px;
  padding-bottom: 50px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.2);
  overflow: scroll;
`;

export default Popup;

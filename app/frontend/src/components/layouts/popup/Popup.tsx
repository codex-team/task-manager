import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

/**
 * Interface for popup component props
 */
interface Props{
  backDropClick: () => void;
}

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

/**
 * Popup component
 *
 * @param props - props of component
 */
const Popup: React.FC<Props> = (props) => {
  const KEYBOARD_ESC = 27;

  const escFunction = useCallback((event) => {
    if (event.keyCode === KEYBOARD_ESC) {
      props.backDropClick();
    }
  }, [ props ]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [ escFunction ]);

  return ReactDOM.createPortal(
    <PopupStyled {...props} onClick={props.backDropClick}>
      <div onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </PopupStyled>,
    document.body
  );
};

export default Popup;

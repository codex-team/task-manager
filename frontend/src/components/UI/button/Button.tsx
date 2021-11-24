import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
}

const ButtonStyles = styled.button``;

const Button: React.FC<Props> = ({
                                   children,
                                  onClick,
                                 ...props
                                 }) => {
  return (
    <ButtonStyles {...props} onClick={onClick}>
      {children}
    </ButtonStyles>
  );
}

export default Button;

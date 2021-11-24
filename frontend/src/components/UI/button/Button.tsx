import React from 'react';
import styled from 'styled-components';

/**
 * Interface for button's props
 */
interface Props extends React.HTMLProps<HTMLButtonElement> {
}

/**
 * button style
 */
const ButtonStyles = styled.button``;

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <ButtonStyles {...props}>
    </ButtonStyles>
  );
};

export default Button;

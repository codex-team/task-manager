import React from 'react';
import styled from 'styled-components';

/**
 * Interface for button's props
 */
interface Props extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> {
}

/**
 * button style
 */
const ButtonStyled = styled.button``;

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <ButtonStyled {...props}/>
  );
};

export default Button;

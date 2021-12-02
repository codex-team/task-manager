import React from 'react';
import styled from 'styled-components';

/**
 * Interface for sidebar heading component props
 */
interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>{
}

/**
 * Styled sidebar heading component
 *
 * @param props - props of component
 */
const InputStyled = styled.input<Props>`
  border: none;
  font-family: 'SF UI Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  outline: none;
  width: 120px;
  border-radius: 12px;
  &:focus::placeholder {
    color: #1D2331;
  }

`;

/**
 * Sidebar heading component
 *
 * @param props - props of component
 */
const SidebarInput: React.FC<Props> = ({ ...props }) => {
  return (
    <InputStyled {...props}/>
  );
};

export default SidebarInput;

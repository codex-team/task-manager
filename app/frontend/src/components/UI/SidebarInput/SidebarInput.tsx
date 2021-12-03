import React from 'react';
import styled from 'styled-components';

/**
 * Interface for sidebar input component props
 */
interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>{
}

/**
 * Styled sidebar input component
 *
 * @param props - props of component
 */
const InputStyled = styled.input<Props>`
  border: none;
  font-size: 14px;
  outline: none;
  width: 75%;
  &:focus::placeholder {
    color: var(--color-text-dark);
  }

`;

/**
 * Sidebar input component
 *
 * @param props - props of component
 */
const SidebarInput: React.FC<Props> = ({ ...props }) => {
  return (
    <InputStyled {...props}/>
  );
};

export default SidebarInput;

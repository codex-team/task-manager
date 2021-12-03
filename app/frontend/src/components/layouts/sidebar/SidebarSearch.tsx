import React from 'react';
import styled from 'styled-components';
import SidebarInput from 'components/UI/SidebarInput/SidebarInput';

/**
 * Interface for sidebar search component props
 */
interface Props{
  placeholder: string;
  icon?: string
}

/**
 * Styled sidebar search component
 *
 * @param props - props of component
 */
const SidebarSearchStyled = styled.div<Props>`
  border-radius: 12px;
  display: inline-flex;
  padding: 5px 10px 5px 10px;
  width: 100%;
  align-items: center;
  border: 1px solid var(--color-form-light);
  margin-top: 16px;
  height: 40px;

  &:focus-within{
    border-color: var(--color-text-dark);
  }
`;

/**
 * Sidebar search component
 *
 * @param props - props of component
 */
const SidebarSearch: React.FC<Props> = ({ ...props }) => {
  return (
    <SidebarSearchStyled {...props}><SidebarInput placeholder={props.placeholder}/><img src={props.icon}/></SidebarSearchStyled>
  );
};

export default SidebarSearch;

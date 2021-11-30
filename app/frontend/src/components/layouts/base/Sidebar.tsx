import React from 'react';
import styled from 'styled-components';

/**
 * Interface for sidebar component props
 */
interface Props{
}

/**
 * Styled sidebar component
 *
 * @param props - props of component
 */
const SidebarStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 230px;
  background: var(--color-bg-main);
`;

/**
 * Sidebar component
 *
 * @param props - props of component
 */
const Sidebar: React.FC<Props> = ({ ...props }) => {
  return (
    <SidebarStyled {...props}/>
  );
};

export default Sidebar;

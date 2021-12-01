import React from 'react';
import styled from 'styled-components';

/**
 * Interface for sidebar heading component props
 */
interface Props{
}

/**
 * Styled sidebar heading component
 *
 * @param props - props of component
 */
const SidebarHeadingStyled = styled.div<Props>`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  height: 40px;
`;

/**
 * Sidebar heading component
 *
 * @param props - props of component
 */
const SidebarHeading: React.FC<Props> = ({ ...props }) => {
  return (
    <SidebarHeadingStyled {...props}/>
  );
};

export default SidebarHeading;

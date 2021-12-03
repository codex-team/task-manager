import React from 'react';
import styled from 'styled-components';
import SidebarTitle from 'components/UI/SidebarTitle/SidebarTitle';
import Button from 'components/UI/button/Button';

/**
 * Interface for sidebar heading component props
 */
interface Props{
  sidebarTitle: string;
}

/**
 * Styled sidebar header component
 *
 * @param props - props of component
 */
const SidebarHeaderStyled = styled.div<Props>`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  height: 40px;
`;

/**
 * Sidebar header component
 *
 * @param props - props of component
 */
const SidebarHeader: React.FC<Props> = ({ ...props }) => {
  return (
    <SidebarHeaderStyled {...props}>
      <SidebarTitle>{props.sidebarTitle}</SidebarTitle>
      <Button/>
    </SidebarHeaderStyled>
  );
};

export default SidebarHeader;

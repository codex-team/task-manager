import React from 'react';
import styled from 'styled-components';
import SidebarTitle from 'components/layouts/base/SidebarTitle';
import Button from 'components/UI/button/Button';
import { Link } from 'react-router-dom';

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
    <SidebarHeaderStyled { ...props }>
      <SidebarTitle>{props.sidebarTitle}</SidebarTitle>
      <Link to='/workspace/edit'>
        <Button icon='settings'/>
      </Link>
    </SidebarHeaderStyled>
  );
};

export default SidebarHeader;

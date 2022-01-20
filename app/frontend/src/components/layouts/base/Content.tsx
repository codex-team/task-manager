import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/**
 * Interface for content component props
 */
interface Props{
}

/**
 * Styled content component
 *
 * @param props - props of component
 */
const ContentStyled = styled.div<Props>`
  padding: 16px;
  width: 100%;
  background: var(--color-bg-main);
`;

/**
 * Content component
 *
 * @param props - props of component
 */
const Content: React.FC<Props> = ({ ...props }) => {
  return (
    <ContentStyled { ...props }>
      <Outlet />
    </ContentStyled>
  );
};

export default Content;

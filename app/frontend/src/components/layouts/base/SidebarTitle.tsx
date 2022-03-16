import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Interface for sidebar title props
 */
interface Props{
}

/**
 * Styled sidebar title component
 *
 * @param props - props of component
 */
const HeadingStyled = styled.h1<Props>`
  font-size: 20px;
  align-self: center;
`;

/**
 * Sidebar title component
 *
 * @param props - props of component
 */
const SidebarTitle: React.FC<Props> = ({ ...props }) => {
  return (
    <HeadingStyled { ...props } />
  );
};

export default SidebarTitle;

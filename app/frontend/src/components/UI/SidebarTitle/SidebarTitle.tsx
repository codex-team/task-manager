import React from 'react';
import styled from 'styled-components';

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
const HeadingStyled = styled.div<Props>`
  font-family: 'SF UI Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;;
  width: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  align-self: center;
  top: 6px;
`;

/**
 * Sidebar title component
 *
 * @param props - props of component
 */
const SidebarTitle: React.FC<Props> = ({ ...props }) => {
  return (
    <HeadingStyled {...props}/>
  );
};

export default SidebarTitle;

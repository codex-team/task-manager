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
const HeadingStyled = styled.div<Props>`
  font-family: 'SF UI Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;;
  width: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  margin-top: 6px;
  margin-bottom: 0;
`;

/**
 * Sidebar component
 *
 * @param props - props of component
 */
const SidebarTitle: React.FC<Props> = ({ ...props }) => {
  return (
    <HeadingStyled {...props}/>
  );
};

export default SidebarTitle;

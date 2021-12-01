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
const UnionStyled = styled.div<Props>`
  cursor: pointer;
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: static;
width: 38px;
height: 38px;

/* Button/Secondary/Normal */
background: #F4F4F4;
border-radius: 12px;

/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0;
`;

/**
 * Sidebar component
 *
 * @param props - props of component
 */
const Union: React.FC<Props> = ({ ...props }) => {
  return (
    <UnionStyled {...props}/>
  );
};

export default Union;

import React from 'react';
import styled from 'styled-components';

/**
 * Interface for container component props
 */
interface Props{
}

/**
 * Styled container component
 *
 * @param props - props of component
 */
const ContainerStyled = styled.div<Props>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
`;

/**
 * Container component
 *
 * @param props - props of component
 */
const Container: React.FC<Props> = ({ ...props }) => {
  return (
    <ContainerStyled { ...props }/>
  );
};

export default Container;

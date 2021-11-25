import React from 'react';
import styled from 'styled-components'

interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>{
}

const ContainerStyled = styled.div<Props>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;

  /* White */
  background: #FFFFFF;
`

const Container: React.FC<Props> = ({...props}) => {
  return (
    <ContainerStyled {...props}/>
  );
}

export default Container;

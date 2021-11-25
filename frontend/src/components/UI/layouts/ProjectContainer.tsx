import React from 'react';
import styled from 'styled-components'

interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>{
}

const ProjectContainerStyled = styled.div<Props>`
  display: block;
  width: 100%;

  /* White */
  background: #FFFFFF;
`

const ProjectContainer: React.FC<Props> = ({...props}) => {
  return (
    <ProjectContainerStyled {...props}/>
  );
}

export default ProjectContainer;

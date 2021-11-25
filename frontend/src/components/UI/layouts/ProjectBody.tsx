import React from 'react';
import styled from 'styled-components'

interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>{
}

const ProjectBodyStyled = styled.div<Props>`
  align-items: flex-start;
  display: flex;
  width: 100%;

  /* White */
  background: #FFFFFF;
`

const ProjectBody: React.FC<Props> = ({...props}) => {
  return (
    <ProjectBodyStyled {...props}/>
  );
}

export default ProjectBody;

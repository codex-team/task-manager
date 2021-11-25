import React from 'react';
import styled from 'styled-components'

interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>{
}

const ProjectNavbarStyled = styled.div<Props>`
  display: inline-block;
  align-items: flex-start;
  padding: 16px;
  width: 100vh;
  height: 40px;
  left: 0;
  top: 0;
  bottom: 0;

  /* White */
  background: #FFFFFF;
`

const ProjectNavbar: React.FC<Props> = ({...props}) => {
  return (
    <ProjectNavbarStyled {...props}/>
);
}

export default ProjectNavbar;

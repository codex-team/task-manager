import React from 'react';
import styled from 'styled-components'

interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>{
}

const SidebarStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 230px;

  /* White */
`

const Sidebar: React.FC<Props> = ({...props}) => {
  return (
    <SidebarStyled {...props}/>
  );
}

export default Sidebar;




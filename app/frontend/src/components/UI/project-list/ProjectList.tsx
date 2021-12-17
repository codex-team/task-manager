import React from 'react';
import styled from 'styled-components';

/**
 * Interface for project list component props
 */
interface Props{
}

/**
 * Styled project list component
 *
 * @param props - props of component
 */
const ProjectListStyled = styled.ul<Props>`
  margin-top: 10px;
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`;

/**
 * Project list component
 *
 * @param props - props of component
 */
const ProjectList: React.FC<Props> = (props) => {
  return (
    <ProjectListStyled>
      {props.children}
    </ProjectListStyled>
  );
};

export default ProjectList;

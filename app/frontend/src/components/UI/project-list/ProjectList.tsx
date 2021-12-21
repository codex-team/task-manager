import React, { useState } from 'react';
import styled from 'styled-components';
import { getProjects } from 'services/projects';
import ProjectListItem from 'components/UI/project-list/ProjectListItem';
import { Project } from 'types/entities';

/**
 * Interface for project list component props
 */
interface Props{
  /**
   * Project workspace id
   */
  workspaceId: string;
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
  const [projects, setProjects] = useState<Project[]>([]);

  getProjects({
    workspaceId: props.workspaceId,
  }).then(
    res => {
      setProjects(res.projects);
    }
  );

  return (
    <ProjectListStyled {...props}>
      {projects.map((project) =>
        <ProjectListItem key={project.id} title={project.title} picture={project.picture}/>
      )}
    </ProjectListStyled>
  );
};

export default ProjectList;

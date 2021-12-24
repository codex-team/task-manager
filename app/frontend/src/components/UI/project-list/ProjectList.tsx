import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProjects } from 'services/projects';
import { Project } from 'types/entities';
import ProjectLink from './ProjectLink';

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
const ProjectListStyled = styled.ul`
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
const ProjectList: React.FC<Props> = ({ workspaceId, children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects({
      workspaceId: workspaceId,
    }).then(
      res => {
        setProjects(res.projects);
      }
    );
  }, [ workspaceId ]);

  return (
    <ProjectListStyled>
      <ProjectLink
        title='All projects'
        picture=''
        to='/projects/all'
      />
      { projects.map((project) =>
        <ProjectLink
          key={ project._id }
          title={ project.title }
          picture={ project.picture }
          to={ '/projects/' + project._id }
        />
      )}
      { children }
    </ProjectListStyled>
  );
};

export default ProjectList;

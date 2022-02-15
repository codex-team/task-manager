import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectLink from './ProjectLink';
import { $projects, getProjectsFx, projectSelected } from 'store/projects';
import { useStore } from 'effector-react';
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
 * Project list component
 *
 * @param props - props of component
 */
const ProjectList: React.FC<Props> = ({ workspaceId, children }) => {
  const projects = useStore($projects);

  useEffect(() => {
    getProjectsFx({
      workspaceId: workspaceId,
    });
  }, [ workspaceId ]);

  /**
   * Updates selected project data in store
   *
   * @param project - selected project data
   */
  const handleProjectClick = (project: Project | null) => (): void => {
    projectSelected(project);
  };

  return (
    <ProjectListStyled>
      <ProjectLink
        title='All projects'
        picture=''
        to='/projects/all'
        onClick={ handleProjectClick(null) }
      />
      { projects.map((project) =>
        <ProjectLink
          key={ project._id }
          title={ project.title }
          picture={ project.picture }
          to={ '/projects/' + project._id }
          onClick={ handleProjectClick(project) }
        />
      )}
      { children }
    </ProjectListStyled>
  );
};

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

export default ProjectList;

import styled from 'styled-components';
import { Outlet, useParams } from 'react-router';
import ProjectHeader from '../project-list-view/components/ProjectHeader';
import { useStore } from 'effector-react';
import { $projects, $selectedProject, projectSelected } from 'store/projects';
import { getTasksFx } from 'store/tasks';
import { useEffect } from 'react';

/**
 * Props of the component
 */
interface Props { }

/**
 * Root project view component.
 * All possible project views are displayed as nested components
 * replacing <Outlet /> when relevant path is matched.
 */
const ProjectRootView: React.FC<Props> = () => {
  const params = useParams();
  const currentProject = useStore($selectedProject);
  const projects = useStore($projects);

  useEffect(() => {
    if (params.id && !currentProject) {
      // Handle page reload, when there is no data about selected project in store
      // though url contains project id
      const selectedProject = projects.find(project => project._id === params.id) || null;

      projectSelected(selectedProject);
    }
    getTasksFx(params.id);
  }, [params.id, currentProject, projects]);

  return (
    <Wrapper>
      <StyledProjectHeader project={ currentProject } to={ `/projects/${params.id}/edit` } />
      <Outlet />
    </Wrapper>
  );
};

/**
 * Styled project header component
 */
const StyledProjectHeader = styled(ProjectHeader)``;

/**
 * Tasks list styled wrapper
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  ${StyledProjectHeader} {
    margin-bottom: 16px;
  }
`;


export default ProjectRootView;

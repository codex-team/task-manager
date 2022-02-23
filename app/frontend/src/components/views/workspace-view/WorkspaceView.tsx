import { $workspace, getWorkspaceFx } from 'store/workspaces';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import Sidebar from '../../layouts/base/Sidebar';
import SidebarHeader from '../../layouts/base/SidebarHeader';
import ProjectList from '../../UI/project-list/ProjectList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../UI/button/Button';

/**
 * Props of the component
 */
interface Props {
}

/**
 * WorkspaceView component
 */
const WorkspaceView: React.FC<Props> = () => {
  const workspace = useStore($workspace);

  useEffect(() => {
    getWorkspaceFx({});
  }, []);

  return (
    <Sidebar>
      <SidebarHeader sidebarTitle={ workspace.name }/>
      <ProjectList workspaceId={ workspace._id }>
        <StyledLink to="/projects/new">
          <StyledButton icon="plus">Add new project</StyledButton>
        </StyledLink>
      </ProjectList>
    </Sidebar>
  );
};

/**
 * Link component with overriden styles
 */
const StyledLink = styled(Link)`
  text-decoration: unset;
`;

/**
 * Button component which takes full width
 */
const StyledButton = styled(Button)`
  width: 100%;
`;

export default WorkspaceView;

import { $workspace, getWorkspaceFx } from 'store/workspaces';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import Sidebar from '../../layouts/base/Sidebar';
import SidebarHeader from '../../layouts/base/SidebarHeader';
import ProjectList from '../../UI/project-list/ProjectList';
import { Link, Route, Routes } from 'react-router-dom';
import Content from '../../layouts/base/Content';
import WorkspaceForm from '../workspace-form/WorkSpaceForm';
import ProjectForm from '../project-form/ProjectForm';
import ProjectView from '../project-view/ProjectView';
import ColorVariables from 'styles/Colors';
import GlobalStyles from 'styles/Global';
import Container from '../../layouts/base/Container';
import styled from 'styled-components';
import Button from '../../UI/button/Button';

/**
 * Props of the component
 */
interface Props {}

/**
 * WorkspaceView component
 */
const WorkspaceView: React.FC<Props> = () => {
  const workspace = useStore($workspace);

  useEffect(() => {
    getWorkspaceFx({});
  }, []);

  return (
    <Container>
      <ColorVariables/>
      <GlobalStyles/>
      <Sidebar>
        <SidebarHeader sidebarTitle={ workspace.name }/>
        <ProjectList workspaceId={ workspace._id }>
          <StyledLink to="/projects/new">
            <StyledButton icon="plus">Add new project</StyledButton>
          </StyledLink>
        </ProjectList>
      </Sidebar>
      <Routes>
        <Route path="/" element={ <Content/> }>
          <Route path="workspace/edit" element={ <WorkspaceForm id={ workspace._id } name={ workspace.name }/> }/>
          <Route path="projects/new" element={ <ProjectForm workspaceId={ workspace._id }/> }/>
          <Route path="projects/:id/edit" element={ <ProjectForm workspaceId={ workspace._id }/> }/>
          <Route path="projects/all/*" element={ <ProjectView/> }/>
          <Route path="projects/:id/*" element={ <ProjectView/> }/>
        </Route>
      </Routes>
    </Container>
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

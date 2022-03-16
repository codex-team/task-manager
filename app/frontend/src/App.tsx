import React, { useEffect, useState } from 'react';
import WorkspaceForm from './components/views/workspace-form/WorkSpaceForm';
import Container from 'components/layouts/base/Container';
import Content from 'components/layouts/base/Content';
import ColorVariables from './styles/Colors';
import GlobalStyles from './styles/Global';
import ProjectForm from 'components/views/project-form/ProjectForm';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import ProjectListView from 'components/views/project-list-view/ProjectListView';
import ProjectRootView from 'components/views/project-root-view/ProjectRootView';
import TaskPopup from 'components/views/project-list-view/components/TaskPopup';
import ProjectBoardView from 'components/views/project-board-view/ProjectBoardView';
import { useStore } from 'effector-react';
import { $workspace, getWorkspaceFx } from 'store/workspaces';
import SidebarHeader from './components/layouts/base/SidebarHeader';
import ProjectList from './components/UI/project-list/ProjectList';
import Sidebar from './components/layouts/base/Sidebar';
import styled from 'styled-components';
import Button from './components/UI/button/Button';

/**
 * Makes the main page
 *
 * @returns {React.ReactElement}
 */
function App(): React.ReactElement {
  const workspace = useStore($workspace);
  const [sidebarTitle, setSidebarTitle] = useState(workspace.name);

  useEffect(() => {
    getWorkspaceFx({});
    setSidebarTitle(workspace.name);
  }, [ workspace ]);

  return (
    <Container>
      <ColorVariables/>
      <GlobalStyles/>
      <Sidebar>
        <SidebarHeader sidebarTitle={ sidebarTitle !== null ? sidebarTitle : '' }/>
        <ProjectList workspaceId={ workspace._id !== null ? workspace._id : '' }>
          <StyledLink to="/projects/new">
            <StyledButton icon="plus">Add new project</StyledButton>
          </StyledLink>
        </ProjectList>
      </Sidebar>
      <Routes>
        <Route path="/" element={ <Content/> }>
          <Route path="workspace/edit" element={ <WorkspaceForm/> }/>
          <Route path="projects/new" element={ <ProjectForm workspaceId={ workspace._id }/> }/>
          <Route path="projects/:id/edit" element={ <ProjectForm workspaceId={ workspace._id }/> }/>
          <Route path="projects/all/*" element={ <ProjectRootView/> }>
            <Route path="*" element={ <ProjectListView/> }>
              <Route path=":task_id" element={ <TaskPopup/> }/>
            </Route>
          </Route>
          <Route path="projects/:id/*" element={ <ProjectRootView/> }>
            <Route path="list/*" element={ <ProjectListView/> }>
              <Route path=":task_id" element={ <TaskPopup/> }/>
            </Route>
            <Route path="board/*" element={ <ProjectBoardView/> }>
              <Route path=":task_id" element={ <TaskPopup/> }/>
            </Route>
            <Route path="*" element={ <Navigate replace to="list"/> }/>
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

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

export default App;

import React, { useEffect } from 'react';
import WorkspaceView from './components/views/workspace-view/WorkspaceView';
import ColorVariables from 'styles/Colors';
import GlobalStyles from 'styles/Global';
import { Route, Routes } from 'react-router-dom';
import Content from './components/layouts/base/Content';
import WorkspaceForm from './components/views/workspace-form/WorkSpaceForm';
import ProjectForm from './components/views/project-form/ProjectForm';
import ProjectView from './components/views/project-view/ProjectView';
import Container from './components/layouts/base/Container';
import { $workspace, getWorkspaceFx } from 'store/workspaces';
import { useStore } from 'effector-react';

/**
 * Makes the main page
 *
 * @returns {React.ReactElement}
 */
function App(): React.ReactElement {
  const workspace = useStore($workspace);

  useEffect(() => {
    getWorkspaceFx({});
  }, []);

  return (
    <Container>
      <ColorVariables/>
      <GlobalStyles/>
      <WorkspaceView/>
      <Routes>
        <Route path="/" element={ <Content/> }>
          <Route path="workspace/edit" element={ <WorkspaceForm/> }/>
          <Route path="projects/new" element={ <ProjectForm workspaceId={ workspace._id }/> }/>
          <Route path="projects/:id/edit" element={ <ProjectForm workspaceId={ workspace._id }/> }/>
          <Route path="projects/all/*" element={ <ProjectView/> }/>
          <Route path="projects/:id/*" element={ <ProjectView/> }/>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

import React from 'react';
import Container from 'components/layouts/base/Container';
import Sidebar from 'components/layouts/base/Sidebar';
import Content from 'components/layouts/base/Content';
import ColorVariables from './styles/Colors';
import GlobalStyles from './styles/Global';
import ProjectForm from 'components/views/projects/ProjectForm';
import {
  Routes,
  Route
} from 'react-router-dom';
import ProjectList from 'components/UI/project-list/ProjectList';
import SidebarHeader from 'components/layouts/base/SidebarHeader';

/**
 * Makes the main page
 *
 * @returns {React.ReactElement}
 */
function App(): React.ReactElement {
  return (
    <Container>
      <ColorVariables/>
      <GlobalStyles/>
      <Sidebar>
        <SidebarHeader sidebarTitle={'CodeX Tasks'}/>
        <ProjectList workspaceId={''}/>
      </Sidebar>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="projects/new" element={<ProjectForm />} />
          <Route path="projects/:id" element={<ProjectForm />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

import React from 'react';
import Container from 'components/layouts/base/Container';
import Sidebar from 'components/layouts/base/Sidebar';
import Content from 'components/layouts/base/Content';
import ColorVariables from './styles/Colors';
import GlobalStyles from './styles/Global';
import ProjectForm from 'components/views/project-form/ProjectForm';
import {
  Routes,
  Route
} from 'react-router-dom';
import ProjectList from 'components/UI/project-list/ProjectList';
import SidebarHeader from 'components/layouts/base/SidebarHeader';
import ProjectView from 'components/views/project-view/ProjectView';
import { Link } from 'react-router-dom';
import Button from 'components/UI/button/Button';
import styled from 'styled-components';


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
        <ProjectList workspaceId={''}>
          <StyledLink to='/projects/new'>
            <StyledButton icon='plus'>Add new project</StyledButton>
          </StyledLink>
        </ProjectList>
      </Sidebar>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="projects/new" element={<ProjectForm />} />
          <Route path="projects/:id/edit" element={<ProjectForm />} />
          <Route path="projects/all/*" element={<ProjectView />} />
          <Route path="projects/:id/*" element={<ProjectView />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

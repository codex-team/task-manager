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
import ProjectListItem from 'components/UI/project-list/ProjectListItem';
import SidebarHeader from 'components/layouts/base/SidebarHeader';
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
        <ProjectList>
          <ProjectListItem title={'All projects'} />
          <ProjectListItem title={'Hawk'} picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHDBRoAMoZ_mga_JVM_Y1drzCF3yII75v4-gqJdueV-hBbhdOPOmAVedy3CbKUWqDfSs&usqp=CAU'}/>
          <ProjectListItem title={'Github Bot'} picture={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
          <StyledLink to='/projects/new'>
            <Button icon='plus'>Add new project</Button>
          </StyledLink>
        </ProjectList>
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

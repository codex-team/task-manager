import React from 'react';
import Container from 'components/layouts/base/Container';
import Sidebar from 'components/layouts/base/Sidebar';
import Content from 'components/layouts/base/Content';
import ColorVariables from './styles/Colors';
import GlobalStyles from './styles/Global';
import ProjectList from 'components/UI/project-list/ProjectList';
import ProjectListItem from 'components/UI/project-list/components/ProjectListItem';
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
        <SidebarHeader sidebarTitle={'Codex Tasks'}/>
        <ProjectList>
          <ProjectListItem projectTitle={'Project 1'}/>
          <ProjectListItem projectTitle={'Project 2'}/>
          <ProjectListItem projectTitle={'Project 3'}/>
        </ProjectList>
      </Sidebar>
      <Content/>
    </Container>
  );
}

export default App;

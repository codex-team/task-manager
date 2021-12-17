import React from 'react';
import Container from 'components/layouts/base/Container';
import Sidebar from 'components/layouts/base/Sidebar';
import Content from 'components/layouts/base/Content';
import ColorVariables from './styles/Colors';
import GlobalStyles from './styles/Global';
import ProjectList from 'components/UI/project-list/ProjectList';
import ProjectListItem from 'components/UI/project-list/ProjectListItem';
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
        <ProjectList>
          <ProjectListItem title={'All projects'} />
          <ProjectListItem title={'Hawk'} picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHDBRoAMoZ_mga_JVM_Y1drzCF3yII75v4-gqJdueV-hBbhdOPOmAVedy3CbKUWqDfSs&usqp=CAU'}/>
          <ProjectListItem title={'Github Bot'} picture={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
        </ProjectList>
      </Sidebar>
      <Content/>
    </Container>
  );
}

export default App;

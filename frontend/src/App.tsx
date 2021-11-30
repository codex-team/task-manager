import React from 'react';
import Container from './components/layouts/base/Container';
import Sidebar from './components/layouts/base/Sidebar';
import Content from './components/layouts/base/Content';
import ColorVariables from "./styles/Colors";

function App(): React.ReactElement {
  return (
    <Container>
      <ColorVariables/>
      <Sidebar/>
      <Content/>
    </Container>
  );
}

export default App;

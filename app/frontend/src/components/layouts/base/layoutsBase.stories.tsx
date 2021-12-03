import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from 'components/layouts/base/Container';
import Content from 'components/layouts/base/Content';
import Sidebar from 'components/layouts/base/Sidebar';
import ColorVariables from '../../../styles/Colors';
import ProjectHeader from 'components/layouts/project/ProjectHeader';

export default {
  title: 'Example/Layout',
  component: Container,
} as ComponentMeta<typeof Container>;
const Template: ComponentStory<typeof Container> = (args) =>
  <Container {...args}>
    <ColorVariables/>
    <Sidebar/>
    <Content>
      <ProjectHeader projectTitle={'CodeX Project'}/>
    </Content>
  </Container>;

export const Base = Template.bind({});
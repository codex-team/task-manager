import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from 'components/layouts/base/Container';
import Content from 'components/layouts/base/Content';
import Sidebar from 'components/layouts/base/Sidebar';
import ColorVariables from 'styles/Colors';
import ProjectHeader from 'components/views/project-view/components/ProjectHeader';

export default {
  component: Container,
} as ComponentMeta<typeof Container>;
const Template: ComponentStory<typeof Container> = (args) =>
  <Container {...args}>
    <ColorVariables/>
    <Sidebar/>
    <Content>
      <ProjectHeader title={'CodeX Project'}/>
    </Content>
  </Container>;

export const Base = Template.bind({});

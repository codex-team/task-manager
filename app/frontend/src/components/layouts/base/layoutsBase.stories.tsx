import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from './Container';
import Content from './Content';
import Sidebar from './Sidebar';
import ColorVariables from '../../../styles/Colors';

export default {
  title: 'Example/Layout',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) =>
  <Container {...args}>
    <ColorVariables/>
    <Sidebar/>
    <Content/>
  </Container>;

export const Base = Template.bind({});

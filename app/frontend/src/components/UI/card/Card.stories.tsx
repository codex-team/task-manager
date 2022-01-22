import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/UI/card/Card';

export default {
  title: 'UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) =>
  <Card { ...args }/>;

export const WithTaskTitle = Template.bind({});
WithTaskTitle.args = {
  taskTitle: 'My task',
};

export const WithProjectInfo = Template.bind({});
WithProjectInfo.args = {
  taskTitle: 'My task',
  projectInfo: { title: 'Project title' },
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  taskTitle: 'My task',
  status: 'Unsorted',
};

export const WithTitleAndCompleteness = Template.bind({});
WithTitleAndCompleteness.args = {
  taskTitle: 'My task',
  subtasksNumber: 10,
  completedSubtasks: 4,
};

export const WithAllInfo = Template.bind({});
WithAllInfo.args = {
  taskTitle: 'My task',
  subtasksNumber: 10,
  completedSubtasks: 4,
  assigneesNumber: 3,
};

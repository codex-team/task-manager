import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/UI/card/Card';

export default {
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) =>
  <Card {...args}/>;

export const WithTaskTitle = Template.bind({});
WithTaskTitle.args = {
  taskTitle: 'My task',
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

import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskInput from 'components/UI/task-input/TaskInput';

export default {
  title: 'Form/TaskInput',
  component: TaskInput,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Add new task',
    },
  },
} as ComponentMeta<typeof TaskInput>;

const Template: ComponentStory<typeof TaskInput> = (args) => <TaskInput { ...args } />;

export const Default = Template.bind({});
Default.args = {
};


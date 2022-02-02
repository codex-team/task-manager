import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from 'components/UI/input/Input';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'disabled',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input { ...args } />;

export const Default = Template.bind({});
Default.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

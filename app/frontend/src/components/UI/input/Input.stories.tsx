import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from 'components/UI/input/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder',
    },
    label: {
      control: 'text',
      defaultValue: 'Input label',
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

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const HasDescription = Template.bind({});
HasDescription.args = {
  children: 'Input description', // Named slots ???
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

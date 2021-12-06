import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabeledInput from 'components/UI/labeled-input/LabeledInput';

export default {
  title: 'Form/LabeledInput',
  component: LabeledInput,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder',
    },
    label: {
      control: 'text',
      defaultValue: 'LabeledInput label',
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
} as ComponentMeta<typeof LabeledInput>;

const Template: ComponentStory<typeof LabeledInput> = (args) => <LabeledInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const HasDescription = Template.bind({});
HasDescription.args = {
  children: 'LabeledInput description', // Named slots ???
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

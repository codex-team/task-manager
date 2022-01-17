import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from 'components/UI/input/Input';
import labeled from 'components/UI/labeled/Labeled';

const LabeledInput = labeled(Input);

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
} as ComponentMeta<typeof LabeledInput>;

const Template: ComponentStory<typeof LabeledInput> = (args) => <LabeledInput {...args} onChange={action('change')}/>;

export const Default = Template.bind({});
Default.args = {
};

export const HasDescription = Template.bind({});
HasDescription.args = {
  children: 'Input description',
};


export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

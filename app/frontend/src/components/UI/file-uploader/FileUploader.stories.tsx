import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FileUploader from 'components/UI/file-uploader/FileUploader';

export default {
  title: 'Form/FileUploader',
  component: FileUploader,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder',
    },
    label: {
      control: 'text',
      defaultValue: 'File uploader label',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    onChange: { action: 'change' },
  },
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => {
  return (
    <FileUploader {...args} onChange={action('change')}/>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};

export const HasDescription = Template.bind({});
HasDescription.args = {
  children: 'File uploader description', // Named slots ???
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

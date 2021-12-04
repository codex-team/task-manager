import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageUploader from 'components/UI/image-uploader/ImageUploader';

export default {
  title: 'Form/ImageUploader',
  component: ImageUploader,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder',
    },
    label: {
      control: 'text',
      defaultValue: '',
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
} as ComponentMeta<typeof ImageUploader>;

const Template: ComponentStory<typeof ImageUploader> = (args) => {
  return (
    <ImageUploader {...args} onChange={action('change')}/>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};

export const HasLabel = Template.bind({});
HasLabel.args = {
  label: 'File uploader label',
};

export const HasLabelAndDescription = Template.bind({});
HasLabelAndDescription.args = {
  label: 'File uploader label',
  children: 'File uploader description', // Named slots ???
};

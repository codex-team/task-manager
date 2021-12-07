import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageUploaderForm from 'components/UI/image-uploader-form/ImageUploaderForm';

export default {
  title: 'Form/ImageUploaderForm',
  component: ImageUploaderForm,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: '',
    },
    onChange: { action: 'change' },
  },
} as ComponentMeta<typeof ImageUploaderForm>;

const Template: ComponentStory<typeof ImageUploaderForm> = (args) => {
  return (
    <ImageUploaderForm {...args} onChange={action('change')}/>
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
  children: 'File uploader description',
};

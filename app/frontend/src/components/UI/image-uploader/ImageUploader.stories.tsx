import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageUploader from 'components/UI/image-uploader/ImageUploader';

export default {
  title: 'Form/ImageUploader',
  component: ImageUploader,
  argTypes: {
    onChange: { action: 'change' },
  },
} as ComponentMeta<typeof ImageUploader>;

const Template: ComponentStory<typeof ImageUploader> = (args) => {
  return (
    <ImageUploader {...args} onChange={ action('change') }/>
  );
};

export const Default = Template.bind({});
Default.args = {
};

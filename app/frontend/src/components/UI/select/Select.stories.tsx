import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from 'components/UI/select/Select';
import { useState } from 'react';

export default {
  title: 'Form/Select',
  component: Select,
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
    options: {
      control: 'object',
      defaultValue: [
        {
          label: 'Item 1',
          value: 1,
        },
        {
          label: 'Item 2',
          value: 2,
        },
        {
          label: 'Item 3',
          value: 3,
        },
      ],
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<number|string|null|undefined>();

  return <Select { ...args } value={ value } onChange={ setValue }/>;
};

export const Default = Template.bind({});
Default.args = {
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from 'components/UI/dropdown/Dropdown';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    items: {
      control: 'object',
      defaultValue: [
        {
          label: 'Item',
          value: 0,
        },
        {
          label: 'Item',
          value: 1,
        },
        {
          label: 'Item',
          value: 2,
        },
      ],
    },
    selectedValue: {
      control: 'number',
    },
    focusedIndex: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const HasSelectedValue = Template.bind({});
HasSelectedValue.args = {
  selectedValue: 2,
};

export const HasFocusedItem = Template.bind({});
HasFocusedItem.args = {
  focusedIndex: 1,
};


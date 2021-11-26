import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { Sizes, StyleTypes } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    styleType: {
      options: StyleTypes,
      control: 'select',
    },
    size: {
      options: Sizes,
      control: 'select',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary button',
  styleType: StyleTypes.PRIMARY,
  size: Sizes.LARGE,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
  size: Sizes.LARGE,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large button',
  size: Sizes.LARGE,
};

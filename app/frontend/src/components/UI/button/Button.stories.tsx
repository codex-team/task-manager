import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { StyleType } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    styleType: {
      options: StyleType,
      control: 'select',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary button',
  styleType: StyleType.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
};

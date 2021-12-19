import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { StyleType } from 'components/UI/button/Button';

export default {
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'plus',
  children: 'Add new project',
  styleType: StyleType.Primary,
};
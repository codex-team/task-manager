import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarTitle from './SidebarTitle';

export default {
  title: 'Example/SidebarTitle',
  component: SidebarTitle,
} as ComponentMeta<typeof SidebarTitle>;

const Template: ComponentStory<typeof SidebarTitle> = (args) => <SidebarTitle {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  children: 'CodeX Tasks',
};

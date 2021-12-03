import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarHeader from 'components/layouts/sidebar/SidebarHeader';

export default {
  title: 'Example/SidebarHeader',
  component: SidebarHeader,
} as ComponentMeta<typeof SidebarHeader>;

const Template: ComponentStory<typeof SidebarHeader> = (args) =>
  <SidebarHeader {...args}>
  </SidebarHeader>;

export const Header = Template.bind({});
Header.args = {
  sidebarTitle: 'CodeX App',
};

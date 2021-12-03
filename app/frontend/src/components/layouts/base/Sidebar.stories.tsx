import SidebarHeader from 'components/layouts/sidebar/SidebarHeader';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarTitle from 'components/UI/SidebarTitle/SidebarTitle';
import Button, { Sizes, StyleTypes } from 'components/UI/button/Button';
import Sidebar from 'components/layouts/base/Sidebar';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;


const Template: ComponentStory<typeof Sidebar> = (args) =>
  <Sidebar>
    <SidebarHeader sidebarTitle={'CodeX App'}>
      <SidebarTitle {...args}>
      </SidebarTitle>
      <Button size={Sizes.SMALL} styleType={StyleTypes.SECONDARY}/>
    </SidebarHeader>
  </Sidebar>;

export const Heading = Template.bind({});
Heading.args = {
  children: 'Codex Tasks',
};

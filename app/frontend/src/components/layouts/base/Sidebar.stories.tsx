import SidebarHeader from 'components/layouts/base/SidebarHeader';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarTitle from 'components/layouts/base/SidebarTitle';
import Button from 'components/UI/button/Button';
import Sidebar from 'components/layouts/base/Sidebar';

export default {
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;


const Template: ComponentStory<typeof Sidebar> = (args) =>
  <Sidebar>
    <SidebarHeader sidebarTitle={'CodeX App'}>
      <SidebarTitle {...args}>
      </SidebarTitle>
      <Button/>
    </SidebarHeader>
  </Sidebar>;

export const Heading = Template.bind({});
Heading.args = {
  children: 'CodeX Tasks',
};

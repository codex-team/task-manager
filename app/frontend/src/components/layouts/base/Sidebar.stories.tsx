import SidebarHeading from '../SidebarHeading';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarTitle from '../../UI/SidebarTitle/SidebarTitle';
import Button, { Sizes, StyleTypes } from '../../UI/button/Button';
import Sidebar from './Sidebar';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;


const Template: ComponentStory<typeof Sidebar> = (args) =>
  <Sidebar>
    <SidebarHeading>
      <SidebarTitle {...args}>
      </SidebarTitle>
      <Button size={Sizes.SMALL} styleType={StyleTypes.SECONDARY}/>
    </SidebarHeading>
  </Sidebar>;

export const Heading = Template.bind({});
Heading.args = {
  children: "Codex Tasks"
};

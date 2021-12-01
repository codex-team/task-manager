import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarHeading from './SidebarHeading';
import Button, { Sizes, StyleTypes } from '../UI/button/Button';
import React from 'react';
import SidebarTitle from '../UI/SidebarTitle/SidebarTitle';

export default {
  title: 'Example/SidebarHeading',
  component: SidebarHeading,
} as ComponentMeta<typeof SidebarHeading>;

const Template: ComponentStory<typeof SidebarHeading> = (args) =>
  <SidebarHeading {...args}>
    <SidebarTitle>
      Codex Tasks
    </SidebarTitle>
    <Button size={Sizes.SMALL} styleType={StyleTypes.SECONDARY}/>
  </SidebarHeading>;

export const Heading = Template.bind({});

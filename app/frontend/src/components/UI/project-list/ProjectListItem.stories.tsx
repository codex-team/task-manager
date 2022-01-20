import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectListItem from 'components/UI/project-list/ProjectListItem';
import Sidebar from 'components/layouts/base/Sidebar';

export default {
  component: ProjectListItem,
} as ComponentMeta<typeof ProjectListItem>;

const Template: ComponentStory<typeof ProjectListItem> = (args) =>
  <Sidebar>
    <ProjectListItem { ...args }/>
  </Sidebar>;

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'My Project',
  picture: '',
};

export const Active = Template.bind({});
Active.args = {
  title: 'My Project',
  picture: '',
  isActive: true,
};


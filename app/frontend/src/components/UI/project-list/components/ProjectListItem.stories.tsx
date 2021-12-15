import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectListItem from 'components/UI/project-list/components/ProjectListItem';

export default {
  component: ProjectListItem,
} as ComponentMeta<typeof ProjectListItem>;

const Template: ComponentStory<typeof ProjectListItem> = (args) =>
  <ProjectListItem {...args}/>;

export const WithTitle = Template.bind({});
WithTitle.args = {
  projectTitle: 'My Project',
  projectPicture: '',
};

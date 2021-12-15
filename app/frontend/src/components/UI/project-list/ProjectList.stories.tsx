import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectList from 'components/UI/project-list/ProjectList';
import ProjectListItem from 'components/UI/project-list/components/ProjectListItem';

export default {
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>;

export const Empty: ComponentStory<typeof ProjectList> = (args) => <ProjectList {...args} />;

export const OneItem: ComponentStory<typeof ProjectList> = (args) => (
  <ProjectList {...args}>
    <ProjectListItem projectTitle={'Project 1'} />
  </ProjectList>
);

export const ManyItems: ComponentStory<typeof ProjectList> = (args) => (
  <ProjectList {...args}>
    <ProjectListItem projectTitle={'Project 1'} />
    <ProjectListItem projectTitle={'Project 2'} />
    <ProjectListItem projectTitle={'Project 3'} />
  </ProjectList>
);


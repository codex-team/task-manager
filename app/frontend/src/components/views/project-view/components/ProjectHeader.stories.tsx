import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectHeader from 'components/views/project-view/components/ProjectHeader';

export default {
  component: ProjectHeader,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ProjectHeader>;

const Template: ComponentStory<typeof ProjectHeader> = (args) =>
  <ProjectHeader { ...args }/>;

export const Header = Template.bind({});
Header.args = {
  title: 'CodeX Project',
};

import {ComponentMeta, ComponentStory} from '@storybook/react';
import ProjectHeader from 'components/layouts/project/ProjectHeader';

export default {
  title: 'Example/ProjectHeader',
  component: ProjectHeader,
  argTypes: {
    projectTitle: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ProjectHeader>;

const Template: ComponentStory<typeof ProjectHeader> = (args) =>
  <ProjectHeader {...args}/>;

export const Header = Template.bind({});
Header.args = {
  projectTitle: 'CodeX Project',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectViewSwitcher from 'components/UI/project-view-switcher/ProjectViewSwitcher';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'UI/ProjectViewSwitcher',
  component: ProjectViewSwitcher,
  argTypes: {
    items: {
      control: 'object',
      defaultValue:
       [
         {
           icon: 'list',
           url: '/list',
         },
         {
           icon: 'kanban',
           url: '/board',
         },
       ],
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof ProjectViewSwitcher>;

const Template: ComponentStory<typeof ProjectViewSwitcher> = (args) => {
  return <ProjectViewSwitcher { ...args }/>;
};

export const Default = Template.bind({});
Default.args = {};
import TeammateList from './TeammateList';
import { BrowserRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from '../../layouts/base/Sidebar';
import TeammateListItem from './TeammateListItem';

export default {
  component: TeammateList,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof TeammateList>;

export const Empty: ComponentStory<typeof TeammateList> = (args) => <TeammateList { ...args } />;

export const OneItem: ComponentStory<typeof TeammateList> = (args) => (
  <Sidebar>
    <TeammateList { ...args }>
      <TeammateListItem key={ '1' } name={ 'New Teammate' } photo={ '' } />
    </TeammateList>
  </Sidebar>
);

export const ManyItem: ComponentStory<typeof TeammateList> = (args) => (
  <Sidebar>
    <TeammateList { ...args }>
      <TeammateListItem key={ '1' } name={ 'New Teammate' } photo={ '' } />
      <TeammateListItem key={ '2' } name={ 'Old Teammate' } photo={ '' } />
      <TeammateListItem key={ '3' }  name={ 'Ancient Teammate' } photo={ 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' } />
    </TeammateList>
  </Sidebar>
);

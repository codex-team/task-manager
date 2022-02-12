import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeammateListItem from './TeammateListItem';
import Sidebar from '../../layouts/base/Sidebar';

export default {
  component: TeammateListItem,
} as ComponentMeta<typeof TeammateListItem>;

const Template: ComponentStory<typeof TeammateListItem> = (args) =>
  <Sidebar>
    <TeammateListItem { ...args } />
  </Sidebar>;

export const WithTitle = Template.bind({});
WithTitle.args = {
  name: 'New Teammate',
  photo: '',
};

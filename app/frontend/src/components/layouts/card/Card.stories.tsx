import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/layouts/card/Card';

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) =>
  <Card {...args}/>;

export const CardWithInfo = Template.bind({});
CardWithInfo.args = {
  taskTitle: 'My task',
};

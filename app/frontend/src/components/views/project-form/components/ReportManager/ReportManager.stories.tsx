import {ComponentMeta, ComponentStory} from "@storybook/react";
import ReportManager from "./ReportManager";

export default {
  component: ReportManager,
} as ComponentMeta<typeof ReportManager>;

const Template: ComponentStory<typeof ReportManager> = () => <ReportManager/>;

export const Default = Template.bind({});


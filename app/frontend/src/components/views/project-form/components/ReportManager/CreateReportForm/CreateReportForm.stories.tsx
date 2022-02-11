import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateReportForm from './CreateReportForm';
import { ScheduledReport, statuses } from 'components/views/project-form/components/ReportManager/ReportManager';

const onSubmit = (report: ScheduledReport): void => (console.log(report));

export default {
  component: CreateReportForm,
} as ComponentMeta<typeof CreateReportForm>;

const Template: ComponentStory<typeof CreateReportForm> = () => <CreateReportForm statuses={ statuses } onSubmit={ onSubmit }/>;

export const Default = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import EditReportForm from './EditReportForm';
import { ScheduledReport, statuses } from 'components/views/project-form/components/ReportManager/ReportManager';

const onSubmit = (report: ScheduledReport): void => (console.log(report));

const onCancel = (): void => (console.log('Cancel event'));

export default {
  component: EditReportForm,
} as ComponentMeta<typeof EditReportForm>;

const Template: ComponentStory<typeof EditReportForm> = () => <EditReportForm
  statuses={ statuses }
  onSubmit={ onSubmit }
  onCancel={ onCancel }
/>;

export const Default = Template.bind({});

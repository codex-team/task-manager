import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { StyleType } from '../../../../UI/button/Button';
import CreateReportForm from './CreateReportForm/CreateReportForm';
import { DropdownItem } from '../../../../UI/dropdown/DropdownItem';

export interface ScheduledReport {
  statusId: number,
  schedule: string,
}

export const statuses: DropdownItem[] = [
  {
    label: 'To do',
    value: 1,
  },
  {
    label: 'Done',
    value: 2,
  },
  {
    label: 'In progress',
    value: 3,
  },
];

const ReportManager: React.FC = () => {
  const [reports, setReports] = useState<ScheduledReport[]>([
    {
      statusId: 1,
      schedule: '0 9 * * 1-5',
    },
    {
      statusId: 2,
      schedule: '0 9 * * 1-5',
    },
  ]);
  const [editingSchedule, setEditingSchedule] = useState(false);
  const [selectedReport, setSelectedReport] = useState<number | undefined>(undefined);

  const parseStatusLabel = (statusId: number): string => {
    const statusObj = statuses.find(status => status.value === statusId);

    return statusObj!.label;
  };

  const onAddReportButtonClick = (): void => {
    setSelectedReport(undefined);
    setEditingSchedule(true);
  };

  /**
   * Edit reports form callbacks
   */

  const onAddReport = (report: ScheduledReport): void => {
    setReports(prevState => [...prevState, report]);
    setEditingSchedule(false);
  };

  const onEditReport = (report: ScheduledReport): void => {
    if (selectedReport === undefined) {
      return;
    }

    setReports(prevState => {
      const stateCopy = [ ...prevState ];

      return [
        ...stateCopy.slice(0, selectedReport),
        report,
        ...stateCopy.slice(selectedReport + 1),
      ];
    });
    setEditingSchedule(false);
  };

  const onFormCancel = (): void => {
    setEditingSchedule(false);
  };

  const onReportSelect = (index: number): void => {
    setSelectedReport(index);
    setEditingSchedule(true);
  };

  const ListOfReports = reports.map(({ statusId, schedule }, index) => {
    return (
      <ReportWrapper key={ index } onClick={ () => onReportSelect(index) }>
        <p>{ parseStatusLabel(statusId) }</p>
        <p>{ schedule }</p>
      </ReportWrapper>
    );
  });

  return (
    <Wrapper>
      {ListOfReports}
      { editingSchedule &&
        <StyledCreateReportForm
          statuses={ statuses }
          editedReport={ selectedReport !== undefined && reports[selectedReport] }
          onSubmit={ selectedReport !== undefined ? onEditReport : onAddReport }
          onCancel={ onFormCancel }
        />
      }
      {
        !editingSchedule &&
        <AddNewScheduleButton
          styleType={ StyleType.Secondary }
          icon='plus'
          onClick={ onAddReportButtonClick }
        >Add new schedule</AddNewScheduleButton>
      }
    </Wrapper>
  );
};

export default ReportManager;

const Wrapper = styled.div`
  width: 309px;
`;

const ReportWrapper = styled.div`
  padding: 7px 12px;
  margin-bottom: 4px;
  border-radius: 12px;

  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.01em;

  &:hover {
    background: var(--color-bg-hover);
    cursor: pointer;
  }

  &:last-of-type {
    margin-bottom: 12px;
  }
`;

const StyledCreateReportForm = styled(CreateReportForm)`
  margin: 20px 0;
`;

const AddNewScheduleButton = styled(Button)`
  width: 100%;
`;

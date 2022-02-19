import React, { MouseEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import Button, { StyleType } from '../../../../UI/button/Button';
import CreateReportForm from './CreateReportForm/CreateReportForm';
import { DropdownItem } from '../../../../UI/dropdown/DropdownItem';
import Icon from '../../../../UI/icon/Icon';

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
    setSelectedReport(undefined);
    setEditingSchedule(false);
  };

  const ListOfReports = reports.map(({ statusId, schedule }, index) => {
    const onReportSelect = (): void => {
      setSelectedReport(index);
      setEditingSchedule(true);
    };

    const onRemoveReport = (event: MouseEvent): void => {
      event.stopPropagation();

      setReports(prevState => {
        const stateCopy = [ ...prevState ];

        return [
          ...stateCopy.slice(0, index),
          ...stateCopy.slice(index + 1),
        ];
      });

      setSelectedReport(undefined);
      setEditingSchedule(false);
    };

    return (
      <ReportWrapper key={ index } onClick={ onReportSelect } selected={ index === selectedReport }>
        <div>
          <p>{ parseStatusLabel(statusId) }</p>
          <p>{ schedule }</p>
        </div>
        <RemoveReportButton name='close' onClick={ onRemoveReport }/>
      </ReportWrapper>
    );
  });

  return (
    <Wrapper>
      {ListOfReports}
      { editingSchedule &&
        <StyledCreateReportForm
          statuses={ statuses }
          editedReport={ selectedReport !== undefined ? reports[selectedReport] : undefined }
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

const RemoveReportButton = styled(Icon)`
  width: 10px;
  height: 10px;
  opacity: 0;
`;

const ReportWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

    ${RemoveReportButton} {
      opacity: 1;
    }
  }

  &:last-of-type {
    margin-bottom: 12px;
  }

  ${({ selected }) => {
    if (selected) {
      return css`
        background: var(--color-bg-hover);

        ${RemoveReportButton} {
          opacity: 1;
        }
      `;
    }
  }}
`;

const StyledCreateReportForm = styled(CreateReportForm)`
  margin: 20px 0;
`;

const AddNewScheduleButton = styled(Button)`
  width: 100%;
`;

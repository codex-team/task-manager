import React, { MouseEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import Button, { StyleType } from '../../../../UI/button/Button';
import EditReportForm from './EditReportForm/EditReportForm';
import { DropdownItem } from '../../../../UI/dropdown/DropdownItem';
import Icon from '../../../../UI/icon/Icon';

/**
 * Report object
 */
export interface ScheduledReport {
  /**
   * Id of report status
   */
  statusId: number,

  /**
   * Schedule of report as cron string
   */
  schedule: string,
}

/**
 * Mocked statuses
 *
 * @todo replace with statuses from the store
 */
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

/**
 * Report manager component
 * This component helps with creating schedule of report
 *
 * @class
 */
const ReportManager: React.FC = () => {
  /**
   * @todo replace mocked values with real project data
   */
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

  /**
   * Mode of manager: editing or not
   */
  const [editingSchedule, setEditingSchedule] = useState(false);

  /**
   * Index of selected report
   * Can be undefined if there is no selected report
   */
  const [selectedReport, setSelectedReport] = useState<number | undefined>(undefined);

  /**
   * Function parses status id and returns string value of the status
   *
   * @param statusId - index of the status to parse
   */
  const parseStatusLabel = (statusId: number): string => {
    const statusObj = statuses.find(status => status.value === statusId);

    return statusObj!.label;
  };

  /**
   * Click handler for add report button
   */
  const onAddReportButtonClick = (): void => {
    setSelectedReport(undefined);
    setEditingSchedule(true);
  };

  /**
   * === Edit reports form callbacks ===
   */
  /**
   * Handler for creating a new report
   *
   * @param report - report object returned from EditReportForm
   */
  const onAddReport = (report: ScheduledReport): void => {
    setReports(prevState => [...prevState, report]);
    setEditingSchedule(false);
  };

  /**
   * Handler for editing an existed report
   *
   * @param report - report object returned from EditReportForm
   */
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

  /**
   * Handler for canceling the form
   */
  const onFormCancel = (): void => {
    setSelectedReport(undefined);
    setEditingSchedule(false);
  };

  const ListOfReports = reports.map(({ statusId, schedule }, index) => {
    /**
     * Select report handler
     */
    const onReportSelect = (): void => {
      setSelectedReport(index);
      setEditingSchedule(true);
    };

    /**
     * Remove report handler
     *
     * @param event - mouse event, it's used for stop propagation
     */
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

    /**
     * @todo needs to parse cron schedule to user-friendly format
     */
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
    <div>
      {ListOfReports}
      { editingSchedule &&
        <StyledEditReportForm
          statuses={ statuses }
          editableReport={ selectedReport !== undefined ? reports[selectedReport] : undefined }
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
    </div>
  );
};

export default ReportManager;

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

const StyledEditReportForm = styled(EditReportForm)`
  margin: 20px 0;
`;

const AddNewScheduleButton = styled(Button)`
  width: 100%;
`;

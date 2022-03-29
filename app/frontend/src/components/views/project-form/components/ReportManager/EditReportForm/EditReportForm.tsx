import React, { useEffect, useState } from 'react';
import Select from 'components/UI/select/Select';
import { DropdownItem } from 'components/UI/dropdown/DropdownItem';
import labeled from '../../../../../UI/labeled/Labeled';
import Input from '../../../../../UI/input/Input';
import styled from 'styled-components';
import Button, { StyleType } from '../../../../../UI/button/Button';
import { ScheduledReport } from '../ReportManager';

/**
 * Props of the form
 */
interface Props {
  /**
   * Possible statuses in form for dropdown
   */
  statuses: DropdownItem[],

  /**
   * CSS class name
   */
  className?: string,

  /**
   * Data of editable report. Can be undefined if the form will create a new report.
   */
  editableReport?: ScheduledReport,

  /**
   * On form submit event handler
   *
   * @param report - report object with new data
   */
  onSubmit: (report: ScheduledReport) => void;

  /**
   * On cancel form handler
   */
  onCancel: () => void,
}

/**
 * Edit report form component is used for creating new reports and editing existed reports
 *
 * @param statuses - statuses for dropdown select
 * @param className - class name of the wrapper for styling
 * @param onSubmit - on submit form handler
 * @param onCancel - on cancel form handler
 * @param editableReport - data of editable report. Can be undefined if the form will create a new report.
 * @class
 */
const EditReportForm: React.FC<Props> = ({ statuses, className, onSubmit, onCancel, editableReport }) => {
  const [statusId, setStatusId] = useState<number | undefined>(undefined);
  const [schedule, setSchedule] = useState('');

  /**
   * If new editable report will pass to the component, the state of component will be updated
   */
  useEffect(() => {
    if (!editableReport) {
      return;
    }

    setStatusId(editableReport.statusId);
    setSchedule(editableReport.schedule);
  }, [ editableReport ]);

  /**
   * Handler for data in dropdown changes
   *
   * @param value - new value
   */
  const onChangeStatus = (value: string | number | null | undefined): void => {
    if (typeof value === 'number') {
      setStatusId(value);
    }
  };

  /**
   * Handler for data in schedule input changes
   *
   * @param value - new value
   */
  const onChangeSchedule = (value: string): void => {
    setSchedule(value);
  };

  /**
   * On form submit handler is used for check the correctness of data
   */
  const onFormSubmit = (): void => {
    if (statusId === undefined || schedule === '') {
      return;
    }

    const report: ScheduledReport = {
      statusId,
      schedule,
    };

    onSubmit(report);
  };

  return (
    <Wrapper className={ className }>
      <LabeledSelect
        label='Status'
        onChange={ onChangeStatus }
        options={ statuses }
        placeholder={ 'Status' }
        value={ statusId }
      />
      <LabeledInput
        label='Schedule'
        placeholder='0 9 * * 1-5'
        onChange={ onChangeSchedule }
        value={ schedule }
      >In a crontab format</LabeledInput>
      <ButtonsWrapper>
        <Button onClick={ onCancel }>Cancel</Button>
        <Button
          styleType={ StyleType.Primary }
          onClick={ onFormSubmit }
        >Add report</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default EditReportForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

const LabeledSelect = labeled(Select);

const LabeledInput = labeled(Input);

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
`;

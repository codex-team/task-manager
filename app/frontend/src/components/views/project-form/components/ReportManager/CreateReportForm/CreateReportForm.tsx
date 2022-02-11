import React, { useEffect, useState } from 'react';
import Select from 'components/UI/select/Select';
import { DropdownItem } from 'components/UI/dropdown/DropdownItem';
import labeled from '../../../../../UI/labeled/Labeled';
import Input from '../../../../../UI/input/Input';
import styled from 'styled-components';
import Button, { StyleType } from '../../../../../UI/button/Button';
import { ScheduledReport } from '../ReportManager';

interface Props {
  statuses: DropdownItem[],

  /**
   * CSS class name
   */
  className?: string,

  editedReport?: ScheduledReport,

  onCancel: () => void,

  onSubmit: (report: ScheduledReport) => void;
}

const CreateReportForm: React.FC<Props> = ({ statuses, className, onSubmit, onCancel, editedReport }) => {
  const [statusId, setStatusId] = useState<number | undefined>(undefined);
  const [schedule, setSchedule] = useState('');

  useEffect(() => {
    if (!editedReport) {
      return;
    }

    setStatusId(editedReport.statusId);
    setSchedule(editedReport.schedule);
  }, [ editedReport ]);

  const onChangeStatus = (value: number): void => {
    setStatusId(value);
  };

  const onChangeSchedule = (value: string): void => {
    setSchedule(value);
  };

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

export default CreateReportForm;

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

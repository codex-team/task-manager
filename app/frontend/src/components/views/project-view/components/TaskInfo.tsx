import React from 'react';
import styled from 'styled-components';
import Select from 'components/UI/select/Select';
import { formatDate } from 'helpers/helpers';
import Task from 'types/entities/task';

/**
 * Interface for task info component props
 */
interface Props {
  projectTitle: string | null;
  task: Task | null;
}

/**
 * Task content component
 *
 * @param Props.projectTitle - title of project
 * @param Props.task - current task
 */
const TaskInfo: React.FC<Props> = ({ projectTitle, task }) => {
  return (
    <TaskInfoStyled>
      <StatusTitle>
        Assignee
      </StatusTitle>
      <Select onChange={ onChange } options={ [] } placeholder={ 'Not assigned' }/>
      <StatusTitle>
        Status
      </StatusTitle>
      <Select onChange={ onChange } options={ [] }/>
      <StatusTitle>
        Creation date
      </StatusTitle>
      <Status>
        { task && formatDate(task.dateCreated) }
      </Status>
      { projectTitle &&
        <div>
          <StatusTitle>
            Project
          </StatusTitle>
          <Status>
            { projectTitle }
          </Status>
        </div>
      }
    </TaskInfoStyled>
  );
};

const onChange = function (): void {
  console.log('Changed');
};

/**
 * Task info styled
 */
const TaskInfoStyled = styled.div`
  width: 220px;
  margin-top: 30px;
  margin-right: 45px;
`;

/**
 * Status title styled
 */
const StatusTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;
`;

/**
 * Status styled
 */
const Status = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
`;

export default TaskInfo;

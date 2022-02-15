import React from 'react';
import styled from 'styled-components';
import Select from 'components/UI/select/Select';
import { formatDate } from 'helpers/helpers';
import Task from 'types/entities/task';
import { changeTaskStatusFx } from 'store/tasks';
import { useStoreMap } from 'effector-react';
import { $selectedProject } from 'store/projects';

/**
 * Status option representing absence of status
 */
const EMPTY_STATUS_OPTION = {
  label: 'Unsorted',
  value: null,
};

/**
 * Interface for task info component props
 */
interface Props {
  /**
   * Title of the task project
   */
  projectTitle: string | null;

  /**
   * Task data
   */
  task: Task;
}

/**
 * Task content component
 *
 * @param Props.projectTitle - title of project
 * @param Props.task - current task
 */
const TaskInfo: React.FC<Props> = ({ projectTitle, task }) => {
  const statusesOptions = useStoreMap(
    $selectedProject,
    (state) => {
      if (!state?.taskStatuses) {
        return [ EMPTY_STATUS_OPTION ];
      }

      return [
        EMPTY_STATUS_OPTION,
        ...state.taskStatuses.map(item => ({
          label: item.label,
          value: item._id,
        })),
      ];
    });

  /**
   * Handles status change
   *
   * @param value - new status value
   */
  const onStatusChange = async (value: string|number|null|undefined): Promise<void> => {
    try {
      changeTaskStatusFx({
        taskId: task._id,
        newStatusId: value as string,
        prevStatusId: task.statusId,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TaskInfoStyled>
      <StatusTitle>
        Assignee
      </StatusTitle>
      <Select onChange={ onChange } options={ [] } placeholder={ 'Not assigned' }/>
      <StatusTitle>
        Status
      </StatusTitle>
      <Select
        onChange={ onStatusChange }
        options={ statusesOptions }
        value={ task?.statusId }
        initialOption={ statusesOptions.find(option => option.value === task?.statusId) }
        placeholder='Unsorted'/>
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

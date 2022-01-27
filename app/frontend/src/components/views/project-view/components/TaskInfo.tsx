import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'components/UI/select/Select';
import { formatDate } from 'helpers/helpers';
import Task from 'types/entities/task';
import { DropdownItem } from 'components/UI/dropdown/DropdownItem';
import { getStatuses, updateStatus } from 'services/statuses';
import { updateTask } from 'services/tasks';
import { Status as StatusType } from 'types/entities';

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
  const [statusesOptions, setStatusesOptions] = useState<DropdownItem[]>([]);
  const [statuses, setStatuses] = useState<StatusType[]>([]);

  useEffect(() => {
    (async function () {
      if (!task) {
        return;
      }
      try {
        const response = await getStatuses(task.projectId as string);

        setStatuses(response.statuses);
        const options = response.statuses.map(item => ({
          label: item.label,
          value: item._id,
        }));

        setStatusesOptions(options);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [ task ]);

  const onStatusChange = async (value: string|number|undefined): Promise<void> => {
    if (!task) {
      return;
    }
    try {
      const prevStatus = statuses.find(status => status._id === task.statusId);

      if (prevStatus) {
        // Remove task id from previous status task ids list
        prevStatus.tasks = prevStatus.tasks.filter(taskId => taskId !== task._id);
        await updateStatus(prevStatus);
      }

      const newStatus = statuses.find(status => status._id === value);

      if (newStatus) {
        // Add task id to new status task ids list
        newStatus.tasks.push(task._id);
        await updateStatus(newStatus);
      }

      await updateTask({
        _id: task._id,
        statusId: value as string,
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

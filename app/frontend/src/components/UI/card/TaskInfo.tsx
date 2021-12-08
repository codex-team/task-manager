import React from 'react';
import styled from 'styled-components';
import TaskCompleteness from 'components/UI/card/TaskCompleteness';

/**
 * Interface for task info component props
 */
interface Props{
  subtasksNumber?: number;
  completedSubtasks?: number;
  taskTitle: string;
}

/**
 * Styled task info component
 *
 * @param props - props of component
 */
const TaskInfoStyled = styled.div<Props>`
  word-wrap: break-word;
  font-size: 14px;
  width: 240px;
`;

/**
 * Task info component
 *
 * @param props - props of component
 */
const TaskInfo: React.FC<Props> = (props) => {
  return (
    <TaskInfoStyled {...props}>
      {props.taskTitle}
      { props.subtasksNumber &&
        <TaskCompleteness>
          {props.completedSubtasks} of {props.subtasksNumber} completed
        </TaskCompleteness>}
    </TaskInfoStyled>
  );
};

export default TaskInfo;

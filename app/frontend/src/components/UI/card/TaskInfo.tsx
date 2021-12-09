import React from 'react';
import styled from 'styled-components';
import TaskProgress from 'components/UI/card/TaskProgress';

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
  width: 90%;
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
      { (props.subtasksNumber || '') &&
        <TaskProgress subtasksNumber={props.subtasksNumber} completedSubtasks={props.completedSubtasks}/> }
    </TaskInfoStyled>
  );
};

export default TaskInfo;

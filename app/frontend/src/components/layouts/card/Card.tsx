import React from 'react';
import styled from 'styled-components';
import TaskInfo from 'components/layouts/card/TaskInfo';
import Assignees from 'components/layouts/card/Assignees';

/**
 * Interface for card component props
 */
interface Props{
  taskTitle: string;
  assigneesNumber?: number;
  subtasksNumber?: number;
  completedSubtasks?: number;
}

/**
 * Styled card component
 *
 * @param props - props of component
 */
const CardStyled = styled.div<Props>`
  display: inline-flex;
  font-weight: 400;
  border-width: 1px;
  border-color: #F4F4F4;
  border-style: solid;
  border-radius: 12px;
  padding: 12px 12px 12px 14px;
  width: 300px;
`;

/**
 * Card component
 *
 * @param props - props of component
 */
const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <CardStyled {...props}>
      <TaskInfo taskTitle={props.taskTitle} subtasksNumber={props.subtasksNumber} completedSubtasks={props.completedSubtasks}/>
      <Assignees assigneesNumber={props.assigneesNumber}/>
    </CardStyled>
  );
};

export default Card;

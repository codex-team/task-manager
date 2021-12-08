import React from 'react';
import styled from 'styled-components';
import TaskInfo from 'components/UI/card/TaskInfo';
import Assignees from 'components/UI/card/Assignees';

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
  justify-content: space-between;
  font-weight: 400;
  border-width: 1px;
  border-color: #F4F4F4;
  border-style: solid;
  border-radius: 12px;
  padding: 12px 12px 12px 14px;
  width: 300px;

  &:hover {
    border-color: #D6D6D6;
  };

  &:active {
    border-color: #1D2331;
    background-color: #1D2331;
    color: var(--color-text-primary-reversed);
    div :last-child{
      color: var(--color-text-secondary-reversed);
    };
    :last-child > :last-child {
      color: var(--color-text-secondary-reversed);
    };
  }
`;

/**
 * Card component
 *
 * @param props - props of component
 */
const Card: React.FC<Props> = (props) => {
  return (
    <CardStyled {...props}>
      <TaskInfo taskTitle={props.taskTitle} subtasksNumber={props.subtasksNumber} completedSubtasks={props.completedSubtasks}/>
      <Assignees assigneesNumber={props.assigneesNumber}/>
    </CardStyled>
  );
};

export default Card;

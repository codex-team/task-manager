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
  border-color: var(--color-card-border);
  border-style: solid;
  border-radius: 12px;
  padding: 12px 12px 12px 14px;
  width: 300px;

  &:hover {
    border-color: var(--color-card-border-hover);
  };

  &:active {
    border-color: var(--color-card-border-active);
    background-color: var(--color-card-bg-active);
    color: var(--color-text-primary-reversed);
    .completeness {
      color: var(--color-text-secondary-reversed);
    };
    .progress {
      color: var(--color-text-secondary-reversed);
    }
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

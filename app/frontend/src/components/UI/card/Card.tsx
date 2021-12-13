import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'components/icons/DefaultAvatar.svg';

/**
 * Interface for card component props
 */
interface Props{
  /**
   * Task Title
   */
  taskTitle: string;

  /**
   * Number of task assignees
   */
  assigneesNumber?: number;

  /**
   * Number of subtasks in task
   */
  subtasksNumber?: number;

  /**
   * Number of completed subtasks in task
   */
  completedSubtasks?: number;
}

/**
 * Styled task title
 */
const Title = styled.div`
  font-weight: 400;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

/**
 * Styled task info
 */
const TaskInfo = styled.div`
  overflow: hidden;
`;

/**
 * Styled task assignees
 */
const Assignees = styled.div`
  display: block;
  width: 18px;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 10px;
`;

/**
 * Styled task progress
 */
const Progress = styled.div`
  font-weight: 500;
  padding-top: 8px;
  font-size: 12px;
  color: var(--color-text-secondary);
`;

/**
 * Styled card component
 *
 * @param props - props of component
 */
const CardStyled = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  border-color: var(--color-line);
  border-style: solid;
  border-radius: 12px;
  padding: 12px 12px 12px 14px;

  &:hover {
    border-color: var(--color-line-hover);
  };

  &:active {
    border-color: var(--color-line-active);
    background-color: var(--color-bg-active);

    ${Title} {
      color: var(--color-text-primary-reversed);;
    };

    ${Assignees} {
      color: var(--color-text-secondary-reversed);
    };

    ${Progress} {
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
  const isShownAssigneesNumber = props.assigneesNumber && props.assigneesNumber-1;

  return (
    <CardStyled {...props}>
      <TaskInfo>
        <Title>
          {props.taskTitle}
        </Title>
        { props.subtasksNumber ?
          <Progress>
            {props.completedSubtasks} of {props.subtasksNumber} completed
          </Progress> : null }
      </TaskInfo>
      <Assignees>
        <Avatar/>
        { isShownAssigneesNumber && props.assigneesNumber?
          `+${props.assigneesNumber-1}`: null }
      </Assignees>
    </CardStyled>
  );
};

/**
 * Default card component props
 */
Card.defaultProps = {
  completedSubtasks : 0,
};

export default Card;

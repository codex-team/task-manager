import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'components/icons/DefaultAvatar.svg';

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
  border-color: var(--color-line);
  border-style: solid;
  border-radius: 12px;
  padding: 12px 12px 12px 14px;
  width: 300px;

  .task-info {
    word-wrap: break-word;
    font-size: 14px;
    width: 90%;
  }

  .assignees {
    display: block;
    width: 18px;
    text-align: center;
    color: var(--color-text-secondary);
    font-size: 10px;
  };

  .progress {
    font-weight: 500;
    padding-top: 8px;
    font-size: 12px;
    width: 240px;
    color: var(--color-text-secondary);
  }

  &:hover {
    border-color: var(--color-line-hover);
  };

  &:active {
    border-color: var(--color-line-active);
    background-color: var(--color-bg-active);
    color: var(--color-text-primary-reversed);

    .assignees {
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
      <div className={'task-info'}>
        {props.taskTitle}
        { (props.subtasksNumber || '') &&
        <div className={'progress'}>
          {props.completedSubtasks || 0} of {props.subtasksNumber} completed
        </div> }
      </div>
      <div className={'assignees'}>
        <Avatar/>
        { ((props.assigneesNumber && props.assigneesNumber-1) || ``) &&
        `+${props.assigneesNumber?props.assigneesNumber-1:''}` }
      </div>
    </CardStyled>
  );
};

export default Card;

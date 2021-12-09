import React from 'react';
import styled from 'styled-components';

/**
 * Interface for task completeness component props
 */
interface Props{
  completedSubtasks?: number;
  subtasksNumber?: number;
}

/**
 * Styled task completeness component
 *
 * @param props - props of component
 */
const TaskProgressStyled = styled.div<Props>`
  font-weight: 500;
  padding-top: 8px;
  font-size: 12px;
  width: 240px;
  color: var(--color-text-secondary);
`;

/**
 * Task completeness component
 *
 * @param props - props of component
 */
const TaskProgress: React.FC<Props> = (props) => {
  return (
    <TaskProgressStyled {...props} className={'progress'}>
      {props.completedSubtasks || 0} of {props.subtasksNumber} completed
    </TaskProgressStyled>
  );
};

export default TaskProgress;

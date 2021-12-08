import React from 'react';
import styled from 'styled-components';

/**
 * Interface for task completeness component props
 */
interface Props{
}

/**
 * Styled task completeness component
 *
 * @param props - props of component
 */
const TaskCompletenessStyled = styled.div<Props>`
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
const TaskCompleteness: React.FC<Props> = ({ ...props }) => {
  return (
    <TaskCompletenessStyled {...props}>{props.children}</TaskCompletenessStyled>
  );
};

export default TaskCompleteness;

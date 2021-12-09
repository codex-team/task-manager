import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'components/icons/DefaultAvatar.svg';

/**
 * Interface for assignees component props
 */
interface Props{
  assigneesNumber?: number;
}

/**
 * Styled assignees component
 *
 * @param props - props of component
 */
const AssigneesStyled = styled.div<Props>`
  display: block;
  width: 18px;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 10px;
`;

/**
 * Assignees component
 *
 * @param props - props of component
 */
const Assignees: React.FC<Props> = (props ) => {
  return (
    <AssigneesStyled {...props} className={'assignees'}>
      <Avatar/>
      { ((props.assigneesNumber && props.assigneesNumber-1) || ``) &&
      `+${props.assigneesNumber?props.assigneesNumber-1:''}` }
    </AssigneesStyled>
  );
};

export default Assignees;

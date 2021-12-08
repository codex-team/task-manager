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
  margin-left: 18px;
  display: block;
  width: 18px;
  color: var(--color-text-secondary);
  font-size: 10px;
`;

/**
 * Assignees component
 *
 * @param props - props of component
 */
const Assignees: React.FC<Props> = ({ ...props }) => {
  return (
    <AssigneesStyled {...props}>
      <Avatar/>
      { props.assigneesNumber && `+${props.assigneesNumber}` }
    </AssigneesStyled>
  );
};

export default Assignees;

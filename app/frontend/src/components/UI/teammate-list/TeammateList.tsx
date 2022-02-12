import React, { useEffect } from 'react';
import { $teammates, getTeammatesFx } from 'store/teammates';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import TeammateListItem from './TeammateListItem';

/**
 * Interface for teammate list component props
 */
interface Props { }

/**
 * Teammate list component
 *
 * @param props - props of component
 */
const TeammateList: React.FC<Props> = ({ children }) => {
  const teammates = useStore($teammates);

  useEffect(() => {
    getTeammatesFx({});
  });

  return (
    <StyledTeammateList>
      { teammates.map((teammate) =>
        <TeammateListItem name={ teammate.name } photo={ teammate.photo } />
      )}
      { children }
    </StyledTeammateList>
  );
};

/**
 * Styled teammate list component
 */
const StyledTeammateList = styled.ul`
  margin-top: 10px;
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`;

export default TeammateList;

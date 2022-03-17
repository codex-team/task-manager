import React, { useEffect } from 'react';
import { $teammates, getTeammatesFx } from 'store/teammates';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import TeammateListItem from './TeammateListItem';
import { UiComponentText } from 'styles/Mixins';

/**
 * Interface for teammate list component props
 */
interface Props {
  /**
   * workspaceId which teammate relies on
   */
  workspaceId: string
}

/**
 * Teammate list component
 *
 * @param props - props of component
 */
const TeammateList: React.FC<Props> = (props) => {
  const teammates = useStore($teammates);

  useEffect(() => {
    getTeammatesFx({
      workspaceId: props.workspaceId,
    });
  }, [teammates.length, props.workspaceId]);

  return (
    <div>
      <LabelWrapper>
        <label>Team management</label>
        { teammates.length > 0 &&
          <Description>Current users in your team</Description>
        }
        { teammates.length <= 0 &&
          <Description>There is no users in current team</Description>
        }
      </LabelWrapper>
      <StyledTeammateList>
        { teammates.map((teammate) =>
          <TeammateListItem key={ teammate._id } _id={ teammate._id } name={ teammate.name } photo={ teammate.photo }/>
        ) }
      </StyledTeammateList>
    </div>
  );
};

/**
 * Styled wrapper for label component
 */
const LabelWrapper = styled.div`
  ${ UiComponentText };

  margin-bottom: 12px !important;

  label {
    color: var(--color-text-primary);
    font-weight: 600;
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

/**
 * Description component
 */
const Description = styled.p`
  color: var(--color-text-secondary);
  margin-top: 4px;
`;

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

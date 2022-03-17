import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'icons/DefaultAvatar.svg';
import Icon from '../icon/Icon';
import { removeTeammateFx } from 'store/teammates';

/**
 * Interface for teammate component props
 */
export interface Props {
  /**
   * Teammate id
   */
  _id: string

  /**
   * Teammate name
   */
  name: string

  /**
   * Teammate picture
   */
  photo?: string

  /**
   * True if item is active
   */
  isActive?: boolean
}

/**
 * Styled teammate component
 *
 * @param props - props of the component
 */
const StyledTeammateListItem = styled.li<Props>`
  touch-callout: none;
  user-select: none;
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: 7px;
  width: 100%;
  height: 38px;
  border-radius: 12px;

  &:hover {
    background: var(--color-bg-hover);

    span {
      display: block;
    }
`;

/**
 * Styled teammate avatar
 */
const TeammateAvatar = styled.div`
  height: 24px;
  width: 24px;
  margin: 7px 8px 7px 7px;
`;

/**
 * Styled image
 */
const Image = styled.img`
  object-fit: cover;
  border-radius: 7px;
  width: 24px;
  height: 24px;
`;

/**
 * Styled teammate title
 */
const TeammateName = styled.div`
  flex: 1 1 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
`;

/**
 * Styled span
 */
const StyledSpan = styled.span`
  display: none;
  width: 24px;
  height: 24px;
  margin: 7px;

  svg {
    margin: 7px;
  }
`;

/**
 * Teammate list item component
 *
 * @param props - props of component
 */
const TeammateListItem: React.FC<Props> = (props) => {
  const removeTeammate = (): void => {
    removeTeammateFx(props._id);
  };

  return (
    <StyledTeammateListItem { ...props }>
      <TeammateAvatar>
        { props.photo ?
          <Image src={ props.photo } alt={ props.name }/>:
          <Avatar height={ 24 } width={ 24 }/>
        }
      </TeammateAvatar>
      <TeammateName>
        {props.name}
      </TeammateName>
      <StyledSpan>
        <Icon name='close' width={ 10 } height={ 10 } onClick={ removeTeammate }/>
      </StyledSpan>
    </StyledTeammateListItem>
  );
};

export default TeammateListItem;

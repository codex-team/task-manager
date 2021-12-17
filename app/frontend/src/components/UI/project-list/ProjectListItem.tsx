import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'components/icons/ProjectAva.svg';

/**
 * Interface for project component props
 */
interface Props{
  /**
   * Project title
   */
  title: string;

  /**
   * Project picture
   */
  picture?: string;
}

/**
 * Styled project title
 */
const ProjectTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 * Styled project avatar
 */
const ProjectAvatar = styled.div`
  height: 24px;
  width: 24px;
  margin: 8px;
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
 * Styled project component
 */
const ProjectListItemStyled = styled.li<Props>`
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
  };
`;

/**
 * Project list item component
 *
 * @param props - props of component
 */
const ProjectListItem: React.FC<Props> = (props) => {
  return (
    <ProjectListItemStyled {...props}>
      <ProjectAvatar>
        { props.picture ?
          <Image src={props.picture} alt={props.title}/>:
          <Avatar/>
        }
      </ProjectAvatar>
      <ProjectTitle>
        {props.title}
      </ProjectTitle>
    </ProjectListItemStyled>
  );
};

export default ProjectListItem;

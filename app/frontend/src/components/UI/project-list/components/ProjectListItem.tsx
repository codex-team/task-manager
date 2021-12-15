import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'components/icons/ProjectAva.svg';

/**
 * Interface for project component props
 */
interface Props{
  /**
   * ProjectListItem title
   */
  projectTitle: string;

  /**
   * ProjectListItem picture
   */
  projectPicture?: string;
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
 * Styled project component
 */
const ProjectListItemStyled = styled.li<Props>`
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

  &:active {
    background: var(--color-contrast);
    ${ProjectTitle} {
      color: var(--color-text-primary-reversed);
    }
  }
`;

/**
 * Project list item list component
 *
 * @param props - props of component
 */
const ProjectListItem: React.FC<Props> = (props) => {
  return (
    <ProjectListItemStyled {...props}>
      <ProjectAvatar>
        { props.projectPicture ?
          <img src={props.projectPicture} alt={props.projectTitle}/>:
          <Avatar/>
        }
      </ProjectAvatar>
      <ProjectTitle>
        {props.projectTitle}
      </ProjectTitle>
    </ProjectListItemStyled>
  );
};

export default ProjectListItem;

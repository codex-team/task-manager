import React, { ForwardedRef, forwardRef, RefObject } from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/UI/icon/Icon';

/**
 * Interface for card component props
 */
export interface Props{
  /**
   * Task Title
   */
  taskTitle: string;

  /**
   * Number of task assignees
   */
  assigneesNumber?: number;

  /**
   * Number of subtasks in task
   */
  subtasksNumber?: number;

  /**
   * Number of completed subtasks in task
   */
  completedSubtasks?: number;

  /**
   * Info about project the card belongs to
   */
  projectInfo?: {
    title: string,
    picture?: string
  }

  /**
   * Task status
   */
  status?: string;

  /**
   * True if card is active
   */
  isActive?: boolean;
}


/**
 * Card component
 *
 * @param props - props of component
 */
const Card: React.FC<Props> = (props) => {
  const isShownAssigneesNumber = props.assigneesNumber && props.assigneesNumber-1;

  return (
    <CardStyled {...props}>
      <TaskInfo>
        { props.projectInfo &&
        <ProjectInfo>
          <ProjectPicture url={ props.projectInfo.picture }>
            { !props.projectInfo.picture &&
              <Icon name='home' width={ 8 } height={ 8 }/>
            }
          </ProjectPicture>
          <ProjectTitle> { props.projectInfo.title } </ProjectTitle>
        </ProjectInfo>
        }
        <Title>
          {props.taskTitle}
        </Title>
        { props.subtasksNumber &&
          <Progress>
            {props.completedSubtasks} of {props.subtasksNumber} completed
          </Progress>
        }
      </TaskInfo>
      { props.status &&
        <Status>
          { props.status }
        </Status>
      }
      <Assignees>
        <Icon name='DefaultAvatar' width={18} height={18}/>
        { (isShownAssigneesNumber && props.assigneesNumber) &&
          `+${props.assigneesNumber-1}`
        }
      </Assignees>
    </CardStyled>
  );
};

/**
 * Styled project picture component
 *
 * @param props - component props
 */
const ProjectPicture = styled.div<{ url?: string }>`
  border-radius: 4px;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background: radial-gradient(100% 100% at 87.5% 6.25%, #AE41F1 0%, #FF75D0 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  ${ ({ url }) => url && css`
    background: url(url);
  `}
`;

/**
 * Styled project title component
 */
const ProjectTitle = styled.span`
  font-size: 10px;
  letter-spacing: -0.01em;
  line-height: 140%;
  color: var(--color-text-secondary);
`;

/**
 * Styled wrapper component for project info
 */
const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

/**
 * Styled wrapper for status info
 */
const Status = styled.div`
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 18px;
  width: 300px;
  align-self: center;
`;

/**
 * Styled task title
 */
const Title = styled.div`
  font-weight: 400;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

/**
 * Styled task info
 */
const TaskInfo = styled.div`
  overflow: hidden;
  margin-right: auto;
`;

/**
 * Styled task assignees
 */
const Assignees = styled.div`
  display: block;
  width: 18px;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 10px;
`;

/**
 * Styled task progress
 */
const Progress = styled.div`
  font-weight: 500;
  padding-top: 8px;
  font-size: 12px;
  color: var(--color-text-secondary);
`;

/**
 * Styled card component
 *
 * @param props - props of component
 */
const CardStyled = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  border-color: var(--color-line);
  border-style: solid;
  border-radius: 12px;
  padding: 12px 12px 12px 14px;
  min-height: 48px;

  &:hover {
    border-color: var(--color-line-hover);
  };
  ${props => props.isActive && css`
    border-color: var(--color-line-active);
    background-color: var(--color-contrast);

    ${Title} {
      color: var(--color-text-primary-reversed);;
    };

    ${Assignees} {
      color: var(--color-text-secondary-reversed);
    };

    ${Progress} {
      color: var(--color-text-secondary-reversed);
    };

    ${ProjectTitle} {
      color: var(--color-text-secondary-reversed);
    }

    ${Status} {
      color: var(--color-text-primary-reversed);;
    }
  `}
`;

/**
 * Default card component props
 */
Card.defaultProps = {
  completedSubtasks : 0,
};

export default Card;

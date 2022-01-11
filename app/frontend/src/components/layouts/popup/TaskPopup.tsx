import React, { useEffect } from 'react';
import PopupWrapper from 'components/layouts/popup/PopupWrapper';
import Task from 'types/entities/task';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Select from 'components/UI/select/Select';

/**
 * Interface for task popup component props
 */
interface Props {
  task?: Task;
  projectTitle?: string | null;
}

/**
 * Task popup component
 *
 * @param task - task to show
 */
const TaskPopup: React.FC<Props> = ({ task, projectTitle }) => {
  const navigate = useNavigate();

  const onClose = (): void => {
    navigate(-1);
  };

  if (!projectTitle) {
    projectTitle = localStorage.getItem('projectTitle');
  } else {
    localStorage.setItem('projectTitle', projectTitle);
    console.log(projectTitle);
  }

  useEffect( () => {
    if (!task) {
      task = JSON.parse(localStorage.getItem('task')!);
    } else {
      localStorage.setItem('task', JSON.stringify(task));
    }

    const data: OutputData = { blocks: JSON.parse(task!.text).blocks };
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: { header: Header,
        paragraph: Paragraph },
      data: data,
    });
  }, [ task ]);

  const a = [ { day: 'numeric' }, { month: 'short' }, { year: 'numeric' } ];

  return (
    <PopupWrapper backDropClick={onClose} isPopupVisible={true}>
      <Container>
        <Content id={'editorjs'}>
        </Content>
        <Additional>
          <StatusTitle>
            Assignee
          </StatusTitle>
          <Select onChange={onClose} options={[]} placeholder={'Not assigned'}/>
          <StatusTitle>
            Status
          </StatusTitle>
          <Select onChange={onClose} options={[]}/>
          <StatusTitle>
            Creation date
          </StatusTitle>
          <Status>
            { task?.dateCreated ? formatDate(task?.dateCreated): null }
          </Status>
          { projectTitle ?
            <StatusTitle>
              Project
            </StatusTitle> :
            null
          }
          { projectTitle ?
            <Status>
              { projectTitle }
            </Status> :
            null
          }
        </Additional>
      </Container>
    </PopupWrapper>
  );
};

const formatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat);
  const dd = date.getDate();

  const mm = date.getMonth() + 1;

  const yy = date.getFullYear();

  return dd + '.' + mm + '.' + yy;
};

/**
 * Content styled
 */
const Content = styled.div`
  width: 630px;
`;

/**
 * Additional styled
 */
const Additional = styled.div`
  width: 240px;
  margin-top: 30px;
  margin-right: 45px;
`;

/**
 * Container styled
 */
const Container = styled.div`
  padding-left: 40px;
  margin-top: 30px;
  display: flex;
  width: auto;
  justify-content: space-between;
`;

/**
 * Status title styled
 */
const StatusTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;
`;

/**
 * Status styled
 */
const Status = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
`;

export default TaskPopup;

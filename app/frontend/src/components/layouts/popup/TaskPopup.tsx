import React, { useEffect, useState } from 'react';
import PopupWrapper from 'components/layouts/popup/PopupWrapper';
import Task from 'types/entities/task';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'components/UI/select/Select';
import { getTaskById } from 'services/tasks';
import { useStore } from 'effector-react';
import { $projects } from 'store/projects';

/**
 * Interface for task popup component props
 */
interface Props {
}

/**
 * Task popup component
 *
 * @param props - props for component
 */
const TaskPopup: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const projects = useStore($projects);

  const id = params.task_id;

  const onClose = (): void => {
    navigate(-1);
  };

  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (id) {
      getTaskById({ taskId: id })
        .then((payload) => {
          if (payload.task) {
            setTask(payload.task);
            const data: OutputData = { blocks: JSON.parse(payload.task.text).blocks };
            const editor = new EditorJS({
              holder: 'editorjs',
              tools: {
                header: Header,
                paragraph: Paragraph,
              },
              data: data,
            });
          }
        });
    }
  }, [ id ]
  );

  const [projectTitle, setProjectTitle] = useState<string | null>(null);

  useEffect( () => {
    if (task) {
      const projectId = task.projectId;
      const currentProject = projects.find((project) => projectId === project._id);

      setProjectTitle(currentProject?.title || null);
    }
  }
  , [projects, task]);

  return (
    <PopupWrapper backDropClick={onClose} isPopupVisible={true} { ...props }>
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
            { task ? formatDate(task.dateCreated) : null }
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
  margin-bottom: 40px;
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

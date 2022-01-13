import React, { useEffect, useState } from 'react';
import PopupWrapper from 'components/layouts/popup/PopupWrapper';
import Task from 'types/entities/task';
import { OutputData } from '@editorjs/editorjs';
import { createReactEditorJS } from 'react-editor-js';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'components/UI/select/Select';
import { getTaskById } from 'services/tasks';
import { useStore } from 'effector-react';
import { $projects } from 'store/projects';
import { EDITOR_JS_TOOLS } from 'tools';

/**
 * Interface for task popup component props
 */
interface Props {}

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

  const ReactEditorJS = createReactEditorJS();

  const [data, setData] = useState<OutputData | null>(null);

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
            const output: OutputData = { blocks: JSON.parse(payload.task.text).blocks };

            setData(output);
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
        <TaskContent>
          { data?
            <ReactEditorJS defaultValue={data} tools={EDITOR_JS_TOOLS}/>:
            null
          }
        </TaskContent>
        <TaskInfo>
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
        </TaskInfo>
      </Container>
    </PopupWrapper>
  );
};

/**
 * Makes string like dd.mm.yyyy from date
 *
 * @param dateToFormat - date for format to string
 *
 * @returns { string } - date to show
 */
const formatDate = (dateToFormat: string): string => {
  return new Date(dateToFormat).toLocaleDateString();
};

/**
 * Content styled
 */
const TaskContent = styled.div`
  width: 630px;
  margin-bottom: 40px;
`;

/**
 * Additional styled
 */
const TaskInfo = styled.div`
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

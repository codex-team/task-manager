import React, { useEffect, useState } from 'react';
import PopupWrapper from 'components/layouts/popup/PopupWrapper';
import Task from 'types/entities/task';
import { OutputData } from '@editorjs/editorjs';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById } from 'services/tasks';
import { useStore } from 'effector-react';
import { $projects } from 'store/projects';
import TaskContent from 'components/views/project-view/components/TaskContent';
import TaskInfo from 'components/views/project-view/components/TaskInfo';

/**
 * Task popup component
 */
const TaskPopup: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const projects = useStore($projects);

  const id = params.task_id;

  const onClose = (): void => {
    navigate('../');

    return navigate(0);
  };

  const [task, setTask] = useState<Task | null>(null);

  const [data, setData] = useState<OutputData | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const exec = async ():Promise<void> => {
      const response = await getTaskById(id);

      setTask(response.task);

      if (!response.task) {
        return;
      }

      const blocks: OutputData = { blocks: JSON.parse(response.task.text).blocks };

      setData(blocks);
    };

    exec();
  }, [ id ]
  );

  const [projectTitle, setProjectTitle] = useState<string | null>(null);

  useEffect(() => {
    if (!task) {
      return;
    }

    const projectId = task.projectId;
    const currentProject = projects.find((project) => projectId === project._id);

    setProjectTitle(currentProject?.title || null);
  }
  , [projects, task]);

  return (
    <PopupWrapper backDropClick={ onClose } isPopupVisible={ true }>
      <Container>
        { task &&
        <TaskContent data={ data } id={ task?._id }/>}
        <TaskInfo projectTitle={ projectTitle } task={ task }/>
      </Container>
    </PopupWrapper>
  );
};

/**
 * Container styled
 */
const Container = styled.div`
  padding-left: 40px;
  padding-top: 25px;
  display: flex;
  width: auto;
  justify-content: space-between;
`;

export default TaskPopup;

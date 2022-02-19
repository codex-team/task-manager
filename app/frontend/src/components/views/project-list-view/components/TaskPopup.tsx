import React, { useEffect, useState } from 'react';
import PopupWrapper from 'components/layouts/popup/PopupWrapper';
import { OutputData } from '@editorjs/editorjs';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $selectedProject } from 'store/projects';
import TaskContent from 'components/views/project-list-view/components/TaskContent';
import TaskInfo from 'components/views/project-list-view/components/TaskInfo';
import { $selectedTask, $tasks, taskSelected } from 'store/tasks';

/**
 * Task popup component
 */
const TaskPopup: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const selectedProject = useStore($selectedProject);
  const task = useStore($selectedTask);
  const tasks = useStore($tasks);
  const id = params.task_id;

  const onClose = (): void => {
    taskSelected(null);
    navigate('../');
  };

  const [data, setData] = useState<OutputData | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const exec = async (): Promise<void> => {
      if (!task) {
        const t = tasks.find(item => item._id === id);

        taskSelected(t);

        return;
      }
      const blocks: OutputData = { blocks: JSON.parse(task.text).blocks };

      setData(blocks);
    };

    exec();
  }, [task, tasks, id]);

  return (
    <PopupWrapper backDropClick={ onClose } isPopupVisible={ true }>
      { task &&
        <Container>
          <TaskContent data={ data } id={ task._id }/>
          <TaskInfo projectTitle={ selectedProject?.title || null } task={ task }/>
        </Container>
      }
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

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProjectHeader from './components/ProjectHeader';
import TaskInput from 'components/UI/task-input/TaskInput';
import { getTasks, createTask } from 'services/tasks';
import Task from 'types/entities/task';
import Card from 'components/UI/card/Card';

/**
 * Props of the component
 */
interface Props { }

/**
 * ProjectView component
 */
const ProjectView: React.FC<Props> = () => {
  const params = useParams();
  const title = params.id ? 'Project title' : 'All projects';
  const [tasksList, setTasksList] = useState<Task[]>([]);

  useEffect(() => {
    (async function fetchTasks() {
      try {
        const { tasks } = await getTasks(params.id ? { projectId: params.id } : {});

        setTasksList(tasks);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [ params.id ]);

  const createNewTask = async (value: string): Promise<void> => {
    try {
      const taskContent = {
        blocks : [
          {
            type: 'paragraph',
            data: {
              text: value,
            },
          },
        ],
      };
      const { task } = await createTask({
        text: JSON.stringify(taskContent),
        projectId: params.id,
      });

      setTasksList([task, ...tasksList]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <StyledProjectHeader title={title} />
      <TaskInput placeholder='Add new task' onChange={ createNewTask }/>
      { tasksList.map(task =>
        <Card key={ task._id } taskTitle={ getTaskTitle(task.text) } />
      )}
    </Wrapper>
  );
};

/**
 * Extracts task title text from first block of task content
 *
 * @param taskText - string containing task content in editor.js format
 */
const getTaskTitle = (taskText: string): string => {
  try {
    return JSON.parse(taskText).blocks[0].data.text;
  } catch {
    return '';
  }
};

/**
 * Styled project header component
 */
const StyledProjectHeader = styled(ProjectHeader)``;

/**
 * Tasks list styled wrapper
 */
const Wrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 3px;
  }

  ${StyledProjectHeader} {
    margin-bottom: 16px;
  }
`;

export default ProjectView;

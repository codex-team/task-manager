import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProjectHeader from './components/ProjectHeader';
import TaskInput from 'components/UI/task-input/TaskInput';
import { getTasks, createTask } from 'services/tasks';
import Task from 'types/entities/task';
import Card from 'components/UI/card/Card';
import { useStore } from 'effector-react';
import { $projects } from 'store/projects';


/**
 * Props of the component
 */
interface Props { }

/**
 * ProjectView component
 */
const ProjectView: React.FC<Props> = () => {
  const params = useParams();
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const projects = useStore($projects);
  const currentProject = projects.find((project) => params.id === project._id);
  const title = currentProject?.title || 'All projects';

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
      <StyledProjectHeader title={title} hasSettingsButton={ !!currentProject }/>
      <TaskInput placeholder='Add new task' onChange={ createNewTask }/>
      { tasksList.map(task =>
        <Card
          key={ task._id }
          taskTitle={ getTaskTitle(task.text) }
          projectInfo={ !currentProject ? projects.find(project => project._id === task.projectId) : undefined }
          status='Unsorted'
        />
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
import styled from 'styled-components';
import { useParams, Outlet } from 'react-router-dom';
import TaskInput from 'components/UI/task-input/TaskInput';
import { useStore } from 'effector-react';
import { $projects, $selectedProject } from 'store/projects';
import CardLink from 'components/views/project-list-view/components/CardLink';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { getOrderScoreDesc } from 'helpers/get-order-score';
import { Project, Task } from 'types/entities';
import { $tasks, createTaskFx, listUpdated, updateTaskFx } from 'store/tasks';

/**
 * Props of the component
 */
interface Props { }

/**
 * Project View allowing to see all the tasks as a list.
 */
const ProjectListView: React.FC<Props> = () => {
  const params = useParams();
  const tasksList = useStore($tasks);
  const currentProject = useStore($selectedProject);
  const projects = useStore($projects);

  const createNewTask = async (value: string): Promise<void> => {
    const taskContent = {
      blocks: [
        {
          type: 'header',
          data: {
            text: value,
            level: 1,
          },
        },
      ],
    };

    /* eslint-disable @typescript-eslint/no-magic-numbers */
    const newTaskOrderScore = !tasksList.length ? 1 : (tasksList[0].orderScore + 1);
    /* eslint-enable @typescript-eslint/no-magic-numbers */

    createTaskFx({
      text: JSON.stringify(taskContent),
      projectId: params.id,
      orderScore: newTaskOrderScore,
    });
  };

  const onDragEnd = async (result: DropResult): Promise<void> => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    const orderScore = getOrderScoreDesc(tasksList, destination.index, source.index);

    const task = tasksList.find(t => t._id === draggableId);
    const updatedTasksList = tasksList.filter(t => t._id !== draggableId);

    updatedTasksList.splice(destination.index, 0, {
      ...task as Task,
      orderScore,
    });
    listUpdated(updatedTasksList);
    updateTaskFx({
      _id: draggableId,
      orderScore,
    });
  };

  /**
   * Returns label of task status.
   *
   * @param task - task that needs label displayed
   */
  const getTaskStatusLabel = (task: Task): string|undefined => {
    if (!currentProject) {
      return;
    }

    return currentProject.taskStatuses?.find(status => status._id === task.statusId)?.label;
  };

  const getTaskProjectInfo = (task: Task): Project | undefined => {
    if (currentProject) {
      return;
    }

    return projects.find(project => project._id === task.projectId);
  };

  return (
    <Wrapper>
      <Outlet />
      <TaskInput placeholder='Add new task' onChange={ createNewTask }/>
      <DragDropContext onDragEnd={ onDragEnd }>
        <Droppable droppableId='0'>
          { provided => (
            <TasksContainer { ...provided.droppableProps } ref={ provided.innerRef }>
              { tasksList.map((task, index) =>
                <Draggable
                  draggableId={ task._id }
                  index={ index }
                  key={ task._id }
                  isDragDisabled={ !currentProject }
                >
                  { draggableProvided => (
                    <CardLink
                      { ...draggableProvided.draggableProps }
                      { ...draggableProvided.dragHandleProps }
                      to={ task._id }
                      key={ task._id }
                      taskTitle={ getTaskTitle(task.text) }
                      projectInfo={ getTaskProjectInfo(task) }
                      status={ getTaskStatusLabel(task) }
                      ref={ draggableProvided.innerRef }
                    />
                  )}
                </Draggable>
              )}
              { provided.placeholder }
            </TasksContainer>
          )}
        </Droppable>
      </DragDropContext>
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
 * Tasks list styled wrapper
 */
const Wrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 3px;
  }
`;

/**
 * Styled container for tasks
 */
const TasksContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 3px;
}
`;

export default ProjectListView;

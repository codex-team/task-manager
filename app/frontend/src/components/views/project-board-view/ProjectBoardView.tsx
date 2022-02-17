import TaskInput from 'components/UI/task-input/TaskInput';
import { useStore } from 'effector-react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Outlet } from 'react-router';
import { $selectedProject, taskMoved } from 'store/projects';
import { $tasks, changeTaskStatusFx, createTaskFx, taskSelected } from 'store/tasks';
import styled from 'styled-components';
import { Status, Task } from 'types/entities';
import CardLink from '../project-list-view/components/CardLink';
import getTaskTitle from 'helpers/get-task-title';
import { ChangeTaskStatusPayload } from 'types/transport/requests/task/change-task-status';
import prepareTaskContent from 'helpers/prepare-task-content';
import { CreateTaskMessagePayload } from 'types/transport/requests/task/create-task';


const UNSORTED_COLUMN_ID = 'unsorted-column';

/**
 * Props of the component
 */
interface Props { }


/**
 * Represents column data structure
 */
interface Column {
  /**
   * Status data
   */
  status: Status | { _id: string, label: string },

  /**
   * Tasks that have corresponding status
   */
  tasks: Task[]
}

/**
 * ProjectBoardView component
 */
const ProjectBoardView: React.FC<Props> = () => {
  const currentProject = useStore($selectedProject);
  const tasksList = useStore($tasks);

  const onDragEnd = async (result: DropResult): Promise<void> => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      // Task stays at the same place

      return;
    }


    const updateParams: ChangeTaskStatusPayload = {
      taskId: draggableId,
    };

    if (source.droppableId !== UNSORTED_COLUMN_ID) {
      updateParams.prevStatusId = source.droppableId;
    }

    if (destination.droppableId !== UNSORTED_COLUMN_ID) {
      updateParams.newStatusId = destination.droppableId;
      updateParams.newIndex = destination.index;
    }

    // Update on UI first to avoid lags
    taskMoved(updateParams);
    // Update on server
    changeTaskStatusFx(updateParams);
  };

  const createNewTask = (statusId: string, text: string): void => {
    if (!currentProject) {
      return;
    }

    const taskData: CreateTaskMessagePayload = {
      text: prepareTaskContent(text),
      projectId: currentProject._id,
      orderScore: (tasksList[0].orderScore + 1),
    };

    if (statusId !== UNSORTED_COLUMN_ID) {
      taskData.statusId = statusId;
    }
    createTaskFx(taskData);
  };

  const handleCardClick = (task: Task): void => {
    taskSelected(task);
  };

  return (
    <Container>
      <Outlet />
      <DragDropContext onDragEnd={ onDragEnd }>
        { getColumnsData(tasksList, currentProject?.taskStatuses).map(column => (
          <ColumnStyled key={ column.status._id }>
            <ColumnLabel>
              { column.status.label }
              <CountLabel>
                { column.tasks.length }
              </CountLabel>
            </ColumnLabel>
            <Droppable droppableId={ column.status._id } >
              { provided => (
                <div
                  { ...provided.droppableProps }
                  ref={ provided.innerRef }>
                  { column.tasks
                    .map((task, index) => (
                      <Draggable
                        draggableId={ task._id }
                        index={ index }
                        key={ task._id }
                        isDragDisabled={ !currentProject }
                      >
                        { draggableProvided => (
                          <StyledCardLink
                            { ...draggableProvided.draggableProps }
                            { ...draggableProvided.dragHandleProps }
                            to={ task._id }
                            key={ task._id }
                            taskTitle={ getTaskTitle(task.text) }
                            ref={ draggableProvided.innerRef }
                            onClick={ () => handleCardClick(task) }
                          />
                        )}
                      </Draggable>
                    ))}
                  { provided.placeholder }
                  <TaskInput onChange={ (value) => createNewTask(column.status._id, value) }/>
                </div>
              )}
            </Droppable>
          </ColumnStyled>
        ))}
      </DragDropContext>
    </Container>
  );
};

/**
 * Styled component for displaying count of tasks in column
 */
const CountLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-left: 6px;
  vertical-align: top;
  line-height: 120%;
`;

/**
 * Styled component for displaying column label
 */
const ColumnLabel = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-text-primary);
  margin-bottom: 12px;
  letter-spacing: -0.005em;
  line-height: 120%;
`;

/**
 * Styled component for displaying card
 */
const StyledCardLink = styled(CardLink)`
  &:not(:last-child){
    margin-bottom: 3px;
  }
`;

/**
 * Styled column container
 */
const ColumnStyled = styled.div`
  width: 300px;
  flex-grow: 0;
  flex-shrink: 0;
`;

/**
 * Styled container
 */
const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-grow: 1;

  ${ColumnStyled} {
    &:not(:last-child){
      margin-right: 16px;
    }
  }
`;

/**
 * Forms data to render columns
 *
 * @param tasks - tasks that should be spread into columns corresponding to their status
 * @param statuses - available statuses data
 */
const getColumnsData = (tasks: Task[], statuses?: Status[]): Column[] => {
  const unsortedTasks = tasks.filter(task => !task.statusId);
  const columns: Column[] = [
    {
      status: {
        _id: UNSORTED_COLUMN_ID,
        label: 'Unsorted',
      },
      tasks: unsortedTasks,
    },
  ];

  statuses?.forEach(status => {
    const tasksWithTheStatus = status.tasks
      .map(id => tasks.find(task => task._id === id))
      .filter(item => !!item);

    columns.push({
      status,
      tasks: tasksWithTheStatus as Task[],
    });
  });

  return columns;
};


export default ProjectBoardView;

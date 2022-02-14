import TaskInput from 'components/UI/task-input/TaskInput';
import { useStore } from 'effector-react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Outlet } from 'react-router';
import { $selectedProject } from 'store/projects';
import { $tasks } from 'store/tasks';
import styled from 'styled-components';
import { Status, Task } from 'types/entities';
import CardLink from '../project-list-view/components/CardLink';
import getTaskTitle from 'helpers/get-task-title';


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
    console.log(result);
  };

  const createNewTask = (text: string): void => {
    console.log('create new task');
  };

  return (
    <Container>
      <Outlet />
      <DragDropContext onDragEnd={ onDragEnd }>
        { getColumnsData(tasksList, currentProject?.taskStatuses).map(column => (
          <Droppable droppableId={ column.status._id } key={ column.status._id }>
            { provided => (
              <ColumnStyled
                { ...provided.droppableProps }
                ref={ provided.innerRef }>

                <ColumnLabel>
                  { column.status.label }
                  <CountLabel>
                    { column.tasks.length }
                  </CountLabel>
                </ColumnLabel>

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
                        />
                      )}
                    </Draggable>
                  ))}

                { provided.placeholder }

                <TaskInput onChange={ createNewTask }/>

              </ColumnStyled>
            )}
          </Droppable>
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
        _id: 'unsorted-column',
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

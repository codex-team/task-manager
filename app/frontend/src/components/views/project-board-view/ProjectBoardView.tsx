import TaskInput from 'components/UI/task-input/TaskInput';
import { useStore } from 'effector-react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Outlet } from 'react-router';
import { $selectedProject } from 'store/projects';
import { $tasks } from 'store/tasks';
import styled from 'styled-components';
import CardLink from '../project-list-view/components/CardLink';

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
 * Props of the component
 */
interface Props { }

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
        { currentProject?.taskStatuses?.map(column => (
          <Droppable droppableId={ column._id } key={ column._id }>
            { provided => (
              <Column
                { ...provided.droppableProps }
                ref={ provided.innerRef }>
                <div>
                  { column.label }
                </div>
                { tasksList
                  .filter(task => task.statusId === column._id)
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
              </Column>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </Container>
  );
};

const StyledCardLink = styled(CardLink)`
  &:not(:last-child){
    margin-bottom: 3px;
  }
`;

const Column = styled.div`
  width: 300px;
  flex-grow: 0;
`;

const Container = styled.div`
  display: flex;

  ${Column} {
    &:not(:last-child){
      margin-right: 16px;
    }
  }
`;


export default ProjectBoardView;

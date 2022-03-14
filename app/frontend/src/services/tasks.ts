import client from 'transport/ctproto-client';
import { CreateTaskResponsePayload } from 'types/transport/responses/task/create-task';
import { GetTasksResponsePayload } from 'types/transport/responses/task/get-tasks';
import { GetTaskByIdMessagePayload } from 'types/transport/requests/task/get-task-by-id';
import { GetTaskByIdResponsePayload } from 'types/transport/responses/task/get-task-by-id';
import { UpdateTaskResponsePayload } from 'types/transport/responses/task/update-task';
import { ChangeTaskStatusResponsePayload } from 'types/transport/responses/task/change-task-status';

/**
 * Returns list of tasks
 *
 * @param projectId - Id of the project in where we need to get Tasks
 */
export async function getTasks(projectId?: string): Promise<GetTasksResponsePayload> {
  const response = await client.send('get-tasks', {
    projectId,
  });

  return response as GetTasksResponsePayload;
}


/**
 * Describes data needed to create task
 */
export interface CreateTaskData {
  /**
   * Text of creating task
   */
  text: string;

  /**
   * Order of the task when displayed in list of project tasks
   */
  orderScore: number;

  /**
   * Unique identifier of task's project
   */
  projectId?: string;

  /**
   * Id of the status the task has
   */
  statusId?: string | null
}

/**
 * Creates new task
 *
 * @param data - new task data
 */
export async function createTask(data: CreateTaskData): Promise<CreateTaskResponsePayload> {
  const response = await client.send('create-task', data);

  return response as CreateTaskResponsePayload;
}

/**
 * Get task by task id
 *
 * @param id - task id
 */
export async function getTaskById(id: string): Promise<GetTaskByIdResponsePayload> {
  const data: GetTaskByIdMessagePayload = {
    taskId: id,
  };

  const response = await client.send('get-task-by-id', data);

  return response as GetTaskByIdResponsePayload;
}

/**
 * Describes data needed to update task
 */
export interface UpdateTaskData {
  /**
   * Task's unique identity
   */
  _id: string;

  /**
   * Text of creating task
   */
  text?: string;

  /**
   * Order of the task when displayed in list of project tasks
   */
  orderScore?: number;

  /**
   * Id of the status
   */
  statusId?: string
}

/**
 * Updates task
 *
 * @param data - updated task data
 */
export async function updateTask(data: UpdateTaskData): Promise<UpdateTaskResponsePayload> {
  const response = await client.send('update-task', data);

  return response as UpdateTaskResponsePayload;
}

/**
 * Describes data needed to change task status
 */

export interface ChangeTaskStatusData {
  /**
   * Id of the task status of which should be updated
   */
   taskId: string

   /**
    * New task status if exists
    */
   newStatusId?: string

   /**
    * Index of the task in new status tasks array
    */
   newIndex?: number
}

/**
 * Updates task status
 *
 * @param data - update params
 */
export async function changeTaskStatus(data: ChangeTaskStatusData): Promise<ChangeTaskStatusResponsePayload> {
  const response = await client.send('change-task-status', data);

  return response as ChangeTaskStatusResponsePayload;
}

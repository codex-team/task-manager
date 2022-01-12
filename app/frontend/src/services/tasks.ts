import client from 'transport/ctproto-client';
import { CreateTaskPayload } from 'types/transport/requests/task/create';
import { GetTasksMessagePayload } from 'types/transport/requests/task/get-tasks';
import { CreateTaskResponsePayload } from 'types/transport/responses/task/create';
import { GetTasksResponsePayload } from 'types/transport/responses/task/get-tasks';
import { GetTaskByIdMessagePayload } from 'types/transport/requests/task/get-task-by-id';
import { GetTaskByIdResponsePayload } from 'types/transport/responses/task/get-task-by-id';

/**
 * Returns list of tasks
 *
 * @param data - query params
 */
export async function getTasks(data: GetTasksMessagePayload): Promise<GetTasksResponsePayload> {
  const response = await client.send('get-tasks', data);

  return response as GetTasksResponsePayload;
}


/**
 * Creates new task
 *
 * @param data - new task data
 */
export async function createTask(data: CreateTaskPayload): Promise<CreateTaskResponsePayload> {
  const response = await client.send('create-task', data);

  return response as CreateTaskResponsePayload;
}

/**
 * Get task by task id
 *
 * @param data - task id
 */
export async function getTaskById(data: GetTaskByIdMessagePayload): Promise<GetTaskByIdResponsePayload> {
  const response = await client.send('get-task-by-id', data);

  return response as GetTaskByIdResponsePayload;
}

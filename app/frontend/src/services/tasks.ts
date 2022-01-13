import client from 'transport/ctproto-client';
import { UpdateTaskPayload } from 'types/transport/requests/task/update-task';
import { GetTasksMessagePayload } from 'types/transport/requests/task/get-tasks';
import { CreateTaskResponsePayload } from 'types/transport/responses/task/create';
import { GetTasksResponsePayload } from 'types/transport/responses/task/get-tasks';
import { CreateTaskPayload } from 'types/transport/requests/task/create';
import { UpdateTaskResponsePayload } from 'types/transport/responses/task/update-task';

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
 * Updates task
 *
 * @param data - updated task data
 */
export async function updateTask(data: UpdateTaskPayload): Promise<UpdateTaskResponsePayload> {
  const response = await client.send('update-task', data);


  return response as UpdateTaskResponsePayload;
}
import { ApiRequest, ApiResponse } from 'types/transport';
import { MessageHandler } from './handlers/messageHandler';

import { CreateProjectHandler } from './handlers/project/create';
import { GetProjectsHandler } from './handlers/project/get-projects';
import { UpdateProjectHandler } from './handlers/project/update';

import { GetStatusesHandler } from './handlers/status/get-statuses';
import { ChangeTaskStatusHandler } from './handlers/task/change-task-status';

import { CreateTaskHandler } from './handlers/task/create-task';
import { GetTaskByIdHandler } from './handlers/task/get-task-by-id';
import { GetTasksHandler } from './handlers/task/get-tasks';
import { UpdateTaskHandler } from './handlers/task/update-task';

import { CreateTeammateHandler } from './handlers/teammate/create-teammate';
import { GetTeammateByIdHandler } from './handlers/teammate/get-teammate-by-id';
import { GetTeammatesHandler } from './handlers/teammate/get-teammates';
import { UpdateTeammateHandler } from './handlers/teammate/update-teammate';

/**
 * Map of message types and associated handlers
 */
const handlers = new Map<string, MessageHandler>([
  /** ./project */
  ['create-project', new CreateProjectHandler()],
  ['get-projects', new GetProjectsHandler()],
  ['update-project', new UpdateProjectHandler()],

  /** ./status */
  ['get-statuses', new GetStatusesHandler()],

  /** ./task */
  ['create-task', new CreateTaskHandler()],
  ['get-task-by-id', new GetTaskByIdHandler()],
  ['get-tasks', new GetTasksHandler()],
  ['update-task', new UpdateTaskHandler()],
  ['change-task-status', new ChangeTaskStatusHandler()],

  /** ./teammate */
  ['create-teammate', new CreateTeammateHandler()],
  ['get-teammate-by-id', new GetTeammateByIdHandler()],
  ['get-teammates', new GetTeammatesHandler()],
  ['update-teammate', new UpdateTeammateHandler()],
]);

/**
 * Dispatches CTProto messages
 *
 * @param message - received message
 */
export async function dispatchMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
  const handler = handlers.get(message.type);

  if (handler) {
    return handler.handle(message.payload);
  }

  /**
   * If no handler was found then ignore message
   */
}

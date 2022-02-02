import { CreateProjectHandler } from './handlers/project/create';
import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { GetProjectsHandler } from './handlers/project/get-projects';
import { GetTasksHandler } from './handlers/task/get-tasks';
import { CreateTaskHandler } from './handlers/task/create';
import { MessageHandler } from './handlers/messageHandler';
import { GetTaskByIdHandler } from './handlers/task/get-task-by-id';
import { UpdateTaskHandler } from './handlers/task/update-task';

/**
 * Map of message types and associated handlers
 */
const handlers = new Map<string, MessageHandler>([
  /** ./project */
  ['create-project', new CreateProjectHandler()],
  ['get-projects', new GetProjectsHandler()],

  /** ./task */
  ['create-task', new CreateTaskHandler()],
  ['get-task-by-id', new GetTaskByIdHandler()],
  ['get-tasks', new GetTasksHandler()],
  ['update-task', new UpdateTaskHandler()],
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

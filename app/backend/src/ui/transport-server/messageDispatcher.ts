import { CreateProject } from './handlers/project/create';
import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { GetProjects } from './handlers/project/get-projects';
import { GetTasks } from './handlers/task/get-tasks';
import { CreateTask } from './handlers/task/create';
import { MessageHandler } from './handlers/messageHandler';
import { GetTaskById } from './handlers/task/get-task-by-id';
import { UpdateTask } from './handlers/task/update-task';


const handlers = new Map<string, MessageHandler>([
  /** ./project */
  ['create-project', new CreateProject()],
  ['get-projects', new GetProjects()],

  /** ./task */
  ['create-task', new CreateTask()],
  ['get-task-by-id', new GetTaskById()],
  ['get-tasks', new GetTasks()],
  ['update-task', new UpdateTask()],
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

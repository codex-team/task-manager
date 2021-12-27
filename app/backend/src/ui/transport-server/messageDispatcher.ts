import { CreateProject } from './handlers/project/create';
import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { GetProjects } from './handlers/project/get-projects';
import { GetTasks } from './handlers/task/get-tasks';
import { CreateTask } from './handlers/task/create';
import { MessageHandler } from './handlers/messageHandler';


const handlers = new Map<string, MessageHandler>([
  ['create-project', new CreateProject()],
  ['get-projects', new GetProjects()],
  ['create-task', new CreateTask()],
  ['get-tasks', new GetTasks()],
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
}

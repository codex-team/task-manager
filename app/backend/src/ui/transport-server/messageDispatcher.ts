import { CreateProject } from '../handlers/project/create';
import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { GetProjects } from '../handlers/project/get-projects';
import { GetTasks } from '../handlers/task/get-tasks';
import { CreateTask } from '../handlers/task/create';

const handlers = [
  new CreateProject(),
  new GetProjects(),
  new CreateTask(),
  new GetTasks(),
];

/**
 * Dispatches CTProto messages
 *
 * @param message - received message
 */
export async function dispatchMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
  for (const handler of handlers) {
    if (handler.type === message.type) {
      return await handler.handle(message.payload);
    }
  }
}

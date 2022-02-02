import { getTasks } from '../../../../db-methods/task/get-tasks';
import { MessageHandler } from '../messageHandler';
import { ApiResponse } from '../../../../../../types/transport';
import { GetTasksMessagePayload } from '../../../../../../types/transport/requests/task/get-tasks';

/**
 * Get tasks handler
 */
export class GetTasks implements MessageHandler {
  public type = 'get-tasks';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetTasksMessagePayload): Promise<ApiResponse['payload'] | void> {
    return {
      tasks: await getTasks(payload.projectId),
    };
  }
}

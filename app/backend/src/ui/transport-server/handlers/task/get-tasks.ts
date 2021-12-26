import { MessageHandler } from '../messageHandler';
import { getTasks } from '../../../../db-methods/task/get-tasks';
import { ApiResponse } from '../../../../../../types/transport';

/**
 *
 */
export class GetTasks implements MessageHandler {
  public type = 'get-tasks';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload): Promise<ApiResponse['payload'] | void> {
    return {
      tasks: await getTasks(payload.projectId),
    };
  }
}

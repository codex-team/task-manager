import { MessageHandler } from '../messageHandler';
import { ApiResponse } from '../../../../../../types/transport';
import { getTaskById } from '../../../../db-methods/task/get-task-by-id';
import { GetTaskByIdMessagePayload } from '../../../../../../types/transport/requests/task/get-task-by-id';

/**
 * Get task by id handler
 */
export class GetTaskById implements MessageHandler {
  public type = 'get-task-by-id';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetTaskByIdMessagePayload): Promise<ApiResponse['payload'] | void> {
    return {
      task: await getTaskById(payload.taskId),
    };
  }
}

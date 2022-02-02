import { MessageHandler } from '../messageHandler';
import { ApiResponse } from '../../../../../../types/transport';
import { updateTask } from '../../../../db-methods/task/update-task';
import { UpdateTaskMessagePayload } from '../../../../../../types/transport/requests/task/update-task';

/**
 * Update task handler
 */
export class UpdateTask implements MessageHandler {
  public type = 'update-task';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: UpdateTaskMessagePayload): Promise<ApiResponse['payload'] | void> {
    return {
      task: await updateTask(
        payload._id,
        payload.text,
        payload.orderScore
      ),
    };
  }
}

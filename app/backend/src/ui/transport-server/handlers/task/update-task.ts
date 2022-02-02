import { MessageHandler } from '../messageHandler';
import { updateTask } from '../../../../db-methods/task/update-task';
import { UpdateTaskMessagePayload } from '../../../../../../types/transport/requests/task/update-task';
import { UpdateTaskResponsePayload } from '../../../../../../types/transport/responses/task/update-task';

/**
 * Update task handler
 */
export class UpdateTaskHandler implements MessageHandler {
  public type = 'update-task';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: UpdateTaskMessagePayload): Promise<UpdateTaskResponsePayload> {
    return {
      task: await updateTask(
        payload._id,
        payload.text,
        payload.orderScore
      ),
    };
  }
}

import { MessageHandler } from '../messageHandler';
import { getTaskById } from '../../../../db-methods/task/get-task-by-id';
import { GetTaskByIdMessagePayload } from '../../../../../../types/transport/requests/task/get-task-by-id';
import { GetTaskByIdResponsePayload } from '../../../../../../types/transport/responses/task/get-task-by-id';

/**
 * Get task by id handler
 */
export class GetTaskByIdHandler implements MessageHandler {
  public type = 'get-task-by-id';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetTaskByIdMessagePayload): Promise<GetTaskByIdResponsePayload> {
    return {
      task: await getTaskById(payload.taskId),
    };
  }
}

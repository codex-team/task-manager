import { createTask } from '../../../../db-methods/task/create';
import { MessageHandler } from '../messageHandler';
import { ApiResponse } from '../../../../../../types/transport';
import { CreateTaskMessagePayload } from '../../../../../../types/transport/requests/task/create';

/**
 * Create task handler
 */
export class CreateTask implements MessageHandler {
  public type = 'create-task';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: CreateTaskMessagePayload): Promise<ApiResponse['payload'] | void> {
    return {
      task: await createTask(
        payload.text,
        payload.orderScore,
        payload.projectId,
        payload.parentId,
        payload.assignees
      ),
    };
  }
}

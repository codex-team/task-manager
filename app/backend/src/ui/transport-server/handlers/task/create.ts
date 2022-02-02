import { createTask } from '../../../../db-methods/task/create';
import { MessageHandler } from '../messageHandler';
import { CreateTaskMessagePayload } from '../../../../../../types/transport/requests/task/create';
import { CreateTaskResponsePayload } from '../../../../../../types/transport/responses/task/create';

/**
 * Create task handler
 */
export class CreateTask implements MessageHandler {
  public type = 'create-task';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: CreateTaskMessagePayload): Promise<CreateTaskResponsePayload> {
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

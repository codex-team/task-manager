import { MessageHandler } from '../messageHandler';
import { createTask } from 'application/task/create-task';
import { CreateTaskMessagePayload } from 'types/transport/requests/task/create-task';
import { CreateTaskResponsePayload } from 'types/transport/responses/task/create-task';

/**
 * Create task handler
 */
export class CreateTaskHandler implements MessageHandler {
  public type = 'create-task';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: CreateTaskMessagePayload): Promise<CreateTaskResponsePayload> {
    return createTask(
      payload.text,
      payload.orderScore,
      payload.projectId,
      payload.parentId,
      payload.assignees
    );
  }
}

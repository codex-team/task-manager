import { MessageHandler } from '../messageHandler';
import { createTask } from '../../../db-methods/task/create';

/**
 *
 */
export class CreateTask implements MessageHandler {
  public type = 'create-task';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload) {
    return {
      task: await createTask(
        payload.text,
        payload.projectId,
        payload.parentId,
        payload.assignees
      ),
    };
  }
}

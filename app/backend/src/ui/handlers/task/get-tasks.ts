import { MessageHandler } from '../messageHandler';
import { getTasks } from '../../../db-methods/task/get-tasks';

/**
 *
 */
export class GetTasks implements MessageHandler {
  public type = 'get-tasks';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload) {
    return {
      tasks: await getTasks(payload.projectId),
    };
  }
}

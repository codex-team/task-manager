import { getTasks } from '../../../../db-methods/task/get-tasks';
import { MessageHandler } from '../messageHandler';
import { GetTasksMessagePayload } from '../../../../../../types/transport/requests/task/get-tasks';
import { GetTasksResponsePayload } from '../../../../../../types/transport/responses/task/get-tasks';

/**
 * Get tasks handler
 */
export class GetTasks implements MessageHandler {
  public type = 'get-tasks';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetTasksMessagePayload): Promise<GetTasksResponsePayload> {
    return {
      tasks: await getTasks(payload.projectId),
    };
  }
}

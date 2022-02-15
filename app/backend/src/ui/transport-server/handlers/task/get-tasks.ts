import { MessageHandler } from '../messageHandler';
import { getTasks } from 'application/task/get-tasks';
import { GetTasksMessagePayload } from 'types/transport/requests/task/get-tasks';
import { GetTasksResponsePayload } from 'types/transport/responses/task/get-tasks';

/**
 * Get tasks handler
 */
export class GetTasksHandler implements MessageHandler {
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

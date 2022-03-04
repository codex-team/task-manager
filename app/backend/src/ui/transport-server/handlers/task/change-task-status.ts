import { MessageHandler } from '../messageHandler';
import { ChangeTaskStatusPayload } from 'types/transport/requests/task/change-task-status';
import { ChangeTaskStatusResponsePayload } from 'types/transport/responses/task/change-task-status';
import { changeTaskStatus } from 'application/task/change-task-status';

/**
 * Change task status handler
 */
export class ChangeTaskStatusHandler implements MessageHandler {
  public type = 'change-task-status';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: ChangeTaskStatusPayload): Promise<ChangeTaskStatusResponsePayload> {
    return changeTaskStatus(payload.taskId, payload.newStatusId, payload.newIndex);
  }
}

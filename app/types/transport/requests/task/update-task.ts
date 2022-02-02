import { NewMessage } from 'ctproto';

export interface UpdateTaskMessagePayload {
  /**
  * Task's unique identity
  */
  _id: string;

  /**
   * Text of creating task
   */
  text?: string;

  /**
   * Order of the task when displayed in list of project tasks
   */
  orderScore?: number;
}

/**
 * Describes the request for updating task
 */
export default interface UpdateTaskMessage extends NewMessage<UpdateTaskMessagePayload> {
  type: 'update-task';
}

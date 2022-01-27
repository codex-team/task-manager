import { NewMessage } from 'ctproto';

export interface UpdateTaskPayload {
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

  /**
   * Id of the status
   */
  statusId?: string
}

/**
 * Describes the request for updating task
 */
export default interface UpdateTaskMessage extends NewMessage<UpdateTaskPayload> {
  type: 'update-task';
}

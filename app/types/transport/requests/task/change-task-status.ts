import { NewMessage } from 'ctproto';

export interface ChangeTaskStatusPayload {
  /**
   * Id of the task status of which should be updated
   */
  taskId: string

  /**
   * New task status if exists
   */
  newStatusId?: string

  /**
   * Index of the task in new status tasks array
   */
  newIndex?: number
}

/**
 * Describes the request for updating task status
 */
export default interface ChangeTaskStatusMessage extends NewMessage<ChangeTaskStatusPayload> {
  type: 'change-task-status';
}

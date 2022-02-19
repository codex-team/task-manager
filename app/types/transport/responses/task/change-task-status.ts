import { ResponseMessage } from 'ctproto';
import { Status } from 'types/entities';
import Task from '../../../entities/task';

/**
 * Response for 'change-task-status' message
 */
export interface ChangeTaskStatusResponsePayload {
  /**
   * Updated task data
   */
  task?: Task | null

  /**
   * Updated previous status object (if not moved from unsorted column)
   */
  prevStatus?: Status | null
  
  /**
   * Updated new status object (if not moved to unsorted column)
   */
  newStatus?: Status | null
}

/**
 * Describes the response of updating task status
 */
export default interface ChangeTaskStatusResponse extends ResponseMessage<ChangeTaskStatusResponsePayload> {}

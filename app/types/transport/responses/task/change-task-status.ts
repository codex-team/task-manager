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
}

/**
 * Describes the response of updating task status
 */
export default interface ChangeTaskStatusResponse extends ResponseMessage<ChangeTaskStatusResponsePayload> {}

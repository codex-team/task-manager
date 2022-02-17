import { ResponseMessage } from 'ctproto';
import Task from '../../../entities/task';

/**
 * Response for 'update-task' message
 * Contains sample of task
 */
export interface UpdateTaskResponsePayload {
  /**
   * Response sample
   */
  task?: Task | null;
}

/**
 * Describes the response of updating task
 */
export default interface UpdateTaskResponse extends ResponseMessage<UpdateTaskResponsePayload> {}

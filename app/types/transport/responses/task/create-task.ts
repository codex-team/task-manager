import { ResponseMessage } from 'ctproto';
import { Status, Task } from 'types/entities';

/**
 * Response for 'create-task' message
 * Contains sample of task
 */
export interface CreateTaskResponsePayload {
  /**
   * Response sample
   */
  task: Task;

  /**
   * Updated status object in case task was created with statusId specified
   */
  status?: Status | null;
}

/**
 * Describes the response of creating task
 */
export default interface CreateTaskResponse extends ResponseMessage<CreateTaskResponsePayload> {}

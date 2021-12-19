import { ResponseMessage } from 'ctproto';
import Task from "../../../entities/task";

/**
 * Response for 'create-task' message
 * Contains sample of task
 */
export interface CreateTaskResponsePayload {
  /**
   * Response sample
   */
  task: Task;
}

/**
 * Describes the response of creating task
 */
export default interface CreateTaskResponse extends ResponseMessage<CreateTaskResponsePayload> {}

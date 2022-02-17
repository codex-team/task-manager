import { ResponseMessage } from 'ctproto';
import Task from '../../../entities/task';

/**
 * Response for 'get-task-by-id' message
 */
export interface GetTaskByIdResponsePayload {
  /**
   * Task, which has definite id
   */
  task: Task | null;
}

/**
 * Describes the response of getting task by id
 */
export default interface GetTaskByIdResponse extends ResponseMessage<GetTaskByIdResponsePayload> {}

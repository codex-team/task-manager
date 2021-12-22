import { ResponseMessage } from 'ctproto';
import Task from '../../../entities/task';

/**
 * Response for 'get-tasks' message
 * Contains list of Tasks in a project
 */
export interface GetTasksResponsePayload {
  /**
   * List of Tasks in a project
   */
  tasks: Task[];
}

/**
 * Describes the response of getting tasks
 */
export default interface GetTasksResponse extends ResponseMessage<GetTasksResponsePayload> {}

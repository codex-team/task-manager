import { NewMessage } from 'ctproto';

export interface GetTaskByIdMessagePayload {
  /**
   * Id of the task
   */
  taskId: string;
}

/**
 * Describes the request for getting task by id
 */
export default interface GetTaskByIdMessage extends NewMessage<GetTaskByIdMessagePayload> {
  type: 'get-task-by-id';
}

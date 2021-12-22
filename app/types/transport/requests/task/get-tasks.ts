import { NewMessage } from 'ctproto';

export interface GetTasksMessagePayload {
  /**
   * Id of the project in where we need to get Tasks
   */
  projectId?: string;
}

/**
 * Describes the request for getting tasks
 */
export default interface GetTasksMessage extends NewMessage<GetTasksMessagePayload> {
  type: 'get-tasks';
}

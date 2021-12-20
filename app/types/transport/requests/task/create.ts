import { NewMessage } from 'ctproto';

export interface CreateTaskPayload {
  /**
   * Body of creating task
   */
  body: string;

  /**
   * Unique identifier of task's project
   */
  projectId: string;

  /**
   * Unique identifier of previous task (subtasks)
   */
  parentId?: string;

  /**
   * Task's assignees
   */
  assignees?: string[];
}

/**
 * Describes the request for creating task
 */
export default interface CreateTaskMessage extends NewMessage<CreateTaskPayload> {
  type: 'create-task';
}

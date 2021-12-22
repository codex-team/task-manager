import { NewMessage } from 'ctproto';

export interface CreateTaskPayload {
  /**
   * Text of creating task
   */
  text: string;

  /**
   * Unique identifier of task's project
   */
  projectId?: string;

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

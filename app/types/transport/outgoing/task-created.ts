import { NewMessage } from 'ctproto';

/**
 * The new Task was created
 */
export interface TaskCreatedPayload {
  /**
   * @todo this is the example payload of outgoing message. Fill with real data on implementation.
   */
  id: string;
}

/**
 * Describes the outgoing message that will be sent when the new Task was created in a Project
 */
export default interface TaskCreatedMessage extends NewMessage<TaskCreatedPayload> {
  type: 'task-created';
}

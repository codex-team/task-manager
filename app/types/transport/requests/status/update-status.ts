import { NewMessage } from 'ctproto';

export interface UpdateStatusPayload {
  /**
   * Status's unique identifier
   */
   _id: string;

  /**
   * Ids of the tasks that have corresponding order
   */
  tasks: string[]
}

export default interface UpdateStatusMessage extends NewMessage<UpdateStatusPayload> {
  type: 'update-status';
}
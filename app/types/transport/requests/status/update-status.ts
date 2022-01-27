import { NewMessage } from "ctproto";

export interface UpdateStatusPayload {
   /**
   * Status unique identity
   */
  _id: string;

  /**
   * Task ids
   */
  tasks: string[]
}

export default interface UpdateStatusMessage extends NewMessage<UpdateStatusPayload>{
  type: 'update-status'
}
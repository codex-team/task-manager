import { NewMessage } from "ctproto";

export interface UpdateTeammatePayload {
  /**
   * Teammate's unique identity
   */
  _id: string;

  /**
   * Teammate's name
   */
  name?: string;

  /**
   * Link to teammate's photo
   */
  photo?: string;

  /**
   * List of teammate's contacts
   */
  contacts?: [ {
    type: string,
    value: string
  } ];
}

/**
 * Describes the request for updating teammate
 */
export default interface UpdateTeammateMessage extends NewMessage<UpdateTeammatePayload> {
  type: 'update-teammate';
}

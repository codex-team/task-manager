import { NewMessage } from "ctproto";
import ContactType from '../../../entities/contactType';

export interface UpdateTeammateMessagePayload {
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
    type: ContactType,
    value: string
  } ];
}

/**
 * Describes the request for updating teammate
 */
export default interface UpdateTeammateMessage extends NewMessage<UpdateTeammateMessagePayload> {
  type: 'update-teammate';
}

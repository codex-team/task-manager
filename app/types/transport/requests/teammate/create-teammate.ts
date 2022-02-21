import { NewMessage } from 'ctproto';
import ContactType from "../../../entities/contactType";

export interface CreateTeammateMessagePayload {
  /**
   * Workspace id that this teammate relies on
   */
  workspaceId: string;

  /**
   * Name of creating teammate
   */
  name: string;

  /**
   * Link to teammate's photo
   */
  photo?: string;

  /**
   * Contact of creating teammate
   */
  contacts?: [ {
    type?: ContactType,
    value: string,
  } ];
}

/**
 * Describes the request for creating teammate
 */
export default interface CreateTeammateMessage extends NewMessage<CreateTeammateMessagePayload> {
  type: 'create-teammate';
}

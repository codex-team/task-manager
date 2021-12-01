import { NewMessage } from 'ctproto';

export interface AuthorizeMessagePayload {
  /**
   * Some authorization token
   */
  token: string;
}

/**
 * Describes the request for authorize
 */
export default interface AuthorizeMessage extends NewMessage<AuthorizeMessagePayload> {
  type: 'authorize';
}

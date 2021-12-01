import { ResponseMessage } from 'ctproto';

/**
 * Authorize response payload
 * For example, can contain authorized user data
 */
export interface AuthorizeResponsePayload {
  /**
   * For example, can contain authorized user data
   */
  userId: string;
}

/**
 * Describes the response of the authorize
 */
export default interface AuthorizeResponse extends ResponseMessage<AuthorizeResponsePayload> {}

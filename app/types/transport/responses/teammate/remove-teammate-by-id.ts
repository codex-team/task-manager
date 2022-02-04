import {ResponseMessage} from "ctproto";

/**
 * Response for 'remove-teammate' message
 * Contains result of removing
 */
export interface RemoveTeammateByIdResponsePayload {
  /**
   * Result of removing
   */
  result: boolean;
}

/**
 * Describes the response of updating teammate
 */
export default interface RemoveTeammateByIdResponse extends ResponseMessage<RemoveTeammateByIdResponsePayload> {}

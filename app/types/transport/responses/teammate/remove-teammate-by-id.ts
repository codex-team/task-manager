import {ResponseMessage} from 'ctproto';
import { Teammate } from '../../../entities';

/**
 * Response for 'remove-teammate' message
 * Contains result of removing
 */
export interface RemoveTeammateByIdResponsePayload {
  /**
   * Removed teammate
   */
  teammate: Teammate | null;
  /**
   * Result of removing
   */
  result: boolean;
}

/**
 * Describes the response of updating teammate
 */
export default interface RemoveTeammateByIdResponse extends ResponseMessage<RemoveTeammateByIdResponsePayload> {}

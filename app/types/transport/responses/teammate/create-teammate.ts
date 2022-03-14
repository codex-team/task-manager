import { ResponseMessage } from 'ctproto';
import Teammate from "../../../entities/teammate";

/**
 * Response for 'create-teammate' message
 * Contains sample of teammate
 */
export interface CreateTeammateResponsePayload {
  /**
   * Response sample
   */
  teammate: Teammate;
}

/**
 * Describes the response of creating teammate
 */
export default interface CreateTeammateResponse extends ResponseMessage<CreateTeammateResponsePayload> {}

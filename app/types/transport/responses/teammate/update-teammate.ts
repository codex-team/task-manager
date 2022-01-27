/**
 * Response for 'update=teammate' message
 * Contains sample of teammate
 */
import {ResponseMessage} from "ctproto";
import Teammate from "../../../entities/teammate";

export interface UpdateTeammateResponsePayload {
  /**
   * Response sample
   */
  teammate?: Teammate | null;
}

/**
 * Describes the response of updating teammate
 */
export default interface UpdateTeammateResponse extends ResponseMessage<UpdateTeammateResponsePayload> {}

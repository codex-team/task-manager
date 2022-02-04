import { ResponseMessage } from "ctproto";
import Teammate from "../../../entities/teammate";

/**
 * Response for 'get-teammate-by-id' message
 */
export interface GetTeammateByIdResponsePayload {
  /**
   * Teammate, which has definite id
   */
  teammate: Teammate | null;
}

/**
 * Describes the response of getting teammate by id
 */
export default interface GetTeammateByIdResponse extends ResponseMessage<GetTeammateByIdResponsePayload> {}

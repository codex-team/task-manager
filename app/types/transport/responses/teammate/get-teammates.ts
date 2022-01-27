import Teammate from "../../../entities/teammate";
import {ResponseMessage} from "ctproto";
import {GetTeammateByIdResponsePayload} from "./get-teammate-by-id";

/**
 * Response for 'get-teammates' message
 * Contains list of teammates in a workspace
 */
export interface GetTeammatesResponsePayload {
  /**
   * List of Teammates in a workspace
   */
  teammates: Teammate[] | null;
}

/**
 * Describes the response of getting list of teammates by workspace id
 */
export default interface GetTeammatesResponse extends ResponseMessage<GetTeammatesResponsePayload> {}

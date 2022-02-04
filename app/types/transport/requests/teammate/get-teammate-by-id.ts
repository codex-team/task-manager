import { NewMessage } from "ctproto";

export interface GetTeammateByIdMessagePayload {
  /**
   * Id of teammate
   */
  teammateId: string;
}

/**
 * Describes the request for getting teammate by id
 */
export default interface GetTeammateByIdMessage extends NewMessage<GetTeammateByIdMessagePayload> {
  type: 'get-teammate-by-id';
}

import { NewMessage } from "ctproto";

export interface GetTeammatesMessagePayload {
  /**
   * Id of the workspace where we need to get teammates
   */
  workspaceId?: string;
}

/**
 * Describes the request for getting teammates
 */
export default interface GetTeammatesMessage extends NewMessage<GetTeammatesMessagePayload> {
  type: 'get-teammates';
}

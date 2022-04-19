import { NewMessage } from 'ctproto';

export interface GetWorkspaceMessagePayload {
}

/**
 * Describes the request for get workspace
 */
export default interface GetWorkspaceMessage extends NewMessage<GetWorkspaceMessagePayload> {
  type: 'get-workspace';
}

import { NewMessage } from 'ctproto';

export interface GetProjectsMessagePayload {
  /**
   * Id of the Workspace in where we need to get Projects
   */
  workspaceId?: string;
}

/**
 * Describes the request for getting projects from Workspace
 */
export default interface GetProjectsMessage extends NewMessage<GetProjectsMessagePayload> {
  type: 'get-projects';
}

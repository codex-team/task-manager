import { NewMessage } from 'ctproto';

export interface GetProjectsMessagePayload {
}

/**
 * Describes the request for getting projects from Workspace
 */
export default interface GetProjectsMessage extends NewMessage<GetProjectsMessagePayload> {
  type: 'get-projects';
}

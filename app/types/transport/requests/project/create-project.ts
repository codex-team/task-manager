import { NewMessage } from 'ctproto';

export interface CreateProjectMessagePayload {
  /**
   * Workspace id which this project relies on
   */
  workspaceId: string;

  /**
   * Title of creating project
   */
  title: string;

  /**
   * Link to project's picture
   */
  picture?: string;

  /**
   * Link to the project's messenger channel
   */
  messengerChannelUrl?: string;
}

/**
 * Describes the request for creating project
 */
export default interface CreateProjectMessage extends NewMessage<CreateProjectMessagePayload> {
  type: 'create-project';
}

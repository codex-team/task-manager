import { NewMessage } from 'ctproto';

export interface UpdateProjectPayload {
  /**
   * Id of project to be updated
   */
  id: string;
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
 * Describes the request for updating project
 */
export default interface UpdateProjectMessage extends NewMessage<UpdateProjectPayload> {
  type: 'update-project';
}

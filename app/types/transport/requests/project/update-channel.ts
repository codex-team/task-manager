import { NewMessage } from 'ctproto';

export interface UpdateProjectChannelPayload {
  /**
   * Id of the project for changing messenger link
   */
  id: string;
  /**
   * Link to the new project's messenger channel
   */
  newChannel: string;
}

/**
 * Describes the request for changing messenger link
 */
export default interface UpdateProjectChannel extends NewMessage<UpdateProjectChannelPayload> {
  type: 'update-project-channel';
}

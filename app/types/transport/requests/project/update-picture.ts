import { NewMessage } from 'ctproto';

export interface UpdateProjectPicturePayload {
  /**
   * Id of the project for changing picture link
   */
  id: string;
  /**
   * Link to the new project's picture
   */
  newPicture: string;
}

/**
 * Describes the request for updating project picture
 */
export default interface UpdateProjectPicture extends NewMessage<UpdateProjectPicturePayload> {
  type: 'update-project-picture';
}

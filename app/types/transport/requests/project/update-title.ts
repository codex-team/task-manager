import { NewMessage } from 'ctproto';

export interface UpdateProjectTitlePayload {
  /**
   * Id of the project for changing its title
   */
  id: string;
  /**
   * New project's name
   */
  newTitle: string;
}

/**
 * Describes the request for updating project title
 */
export default interface UpdateProjectTitle extends NewMessage<UpdateProjectTitlePayload> {
  type: 'update-project-title';
}

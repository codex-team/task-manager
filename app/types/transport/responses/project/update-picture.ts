import { ResponseMessage } from 'ctproto';
import { Project } from '../../../entities';

/**
 * Response for 'update-project-picture' message
 * Contains sample of project
 */
export interface UpdateProjectPictureResponsePayload {
  /**
   * Response project
   */
  project: Project;
}

/**
 * Describes the response of updating project picture's link
 */
export default interface UpdateProjectPictureResponse extends ResponseMessage<UpdateProjectPictureResponsePayload> {}

import { ResponseMessage } from 'ctproto';
import { Project } from '../../../entities';

/**
 * Response for 'update-project-title' message
 * Contains sample of project
 */
export interface UpdateProjectTitleResponsePayload {
  /**
   * Response project
   */
  project: Project;
}

/**
 * Describes the response of updating project title
 */
export default interface UpdateProjectTitleResponse extends ResponseMessage<UpdateProjectTitleResponsePayload> {}

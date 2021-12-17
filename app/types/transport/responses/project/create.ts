import { ResponseMessage } from 'ctproto';
import { Project } from '../../../entities';

/**
 * Response for 'create-project' message
 * Contains sample of project
 */
export interface CreateProjectResponsePayload {
  /**
   * Response sample
   */
  project: Project;
}

/**
 * Describes the response of creating projects
 */
export default interface CreateProjectResponse extends ResponseMessage<CreateProjectResponsePayload> {}

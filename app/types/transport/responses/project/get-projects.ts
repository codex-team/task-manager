import { ResponseMessage } from 'ctproto';
import { Project } from '../../../entities';

/**
 * Response for 'get-projects' message
 * Contains list of Projects in a workspace
 */
export interface GetProjectsResponsePayload {
  /**
   * List of Projects in a workspace
   */
  projects: Project[];
}

/**
 * Describes the response of getting projects
 */
export default interface GetProjectsResponse extends ResponseMessage<GetProjectsResponsePayload> {}

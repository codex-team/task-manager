import { ResponseMessage } from 'ctproto';

/**
 * Response for 'create-project' message
 * Contains message of success creating with project id
 */
export interface CreateProjectResponsePayload {
  /**
   * Response message
   */
  message: string;
}

/**
 * Describes the response of creating projects
 */
export default interface CreateProjectResponse extends ResponseMessage<CreateProjectResponsePayload> {}

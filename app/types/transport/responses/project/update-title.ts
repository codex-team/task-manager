import { ResponseMessage } from 'ctproto';

/**
 * Response for 'update-project-title' message
 * Contains message of success updating with project id
 */
export interface UpdateProjectTitleResponsePayload {
  message: string;
}

/**
 * Describes the response of updating project title
 */
export default interface UpdateProjectTitleResponse extends ResponseMessage<UpdateProjectTitleResponsePayload> {}

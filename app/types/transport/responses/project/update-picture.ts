import { ResponseMessage } from 'ctproto';

/**
 * Response for 'update-project-picture' message
 * Contains message of success updating with project id
 */
export interface UpdateProjectPictureResponsePayload {
  /**
   * Response message
   */
  message: string;
}

/**
 * Describes the response of updating project picture's link
 */
export default interface UpdateProjectPictureResponse extends ResponseMessage<UpdateProjectPictureResponsePayload> {}

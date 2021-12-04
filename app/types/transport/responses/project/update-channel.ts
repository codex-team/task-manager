import { ResponseMessage } from 'ctproto';

/**
 * Response for 'update-project-channel' message
 * Contains message of success updating with project id
 */
export interface UpdateProjectChannelResponsePayload {
  /**
   * Response message
   */
  message: string;
}

/**
 * Describes the response of updating project messenger's channel link
 */
export default interface UpdateProjectChannelResponse extends ResponseMessage<UpdateProjectChannelResponsePayload> {}

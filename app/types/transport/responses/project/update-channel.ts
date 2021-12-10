import { ResponseMessage } from 'ctproto';
import { Project } from '../../../entities';

/**
 * Response for 'update-project-channel' message
 * Contains sample of project
 */
export interface UpdateProjectChannelResponsePayload {
  /**
   * Response project
   */
  project: Project;
}

/**
 * Describes the response of updating project messenger's channel link
 */
export default interface UpdateProjectChannelResponse extends ResponseMessage<UpdateProjectChannelResponsePayload> {}

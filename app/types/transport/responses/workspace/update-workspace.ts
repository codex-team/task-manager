/**
 * Response for 'update-workspace' message
 * Contains sample of workspace
 */
import {ResponseMessage} from 'ctproto';
import { Workspace } from '../../../entities';

export interface UpdateWorkspaceResponsePayload {
  /**
   * Updated workspace data
   */
  workspace: Workspace;
}

/**
 * Describes the response of updating workspace
 */
export default interface UpdateWorkspaceResponse extends ResponseMessage<UpdateWorkspaceResponsePayload> {}

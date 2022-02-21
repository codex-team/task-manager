import { ResponseMessage } from 'ctproto';
import { Workspace } from '../../../entities';

/**
 * Response for 'get-workspace' message
 * Contains sample of workspace
 */
export interface GetWorkspaceResponsePayload {
  /**
   * Sample of workspace
   */
  workspace: Workspace;
}

/**
 * Describes the response of getting workspace
 */
export default interface GetWorkspaceResponse extends ResponseMessage<GetWorkspaceResponsePayload> {}

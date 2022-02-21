import { NewMessage } from 'ctproto';

export interface UpdateWorkspaceMessagePayload {
  /**
   * Workspace's unique identity
   */
  _id: string,

  /**
   * Workspace's visible title
   */
  name: string;

  /**
   * List of teammates
   */
  teammates?: string[];
}

/**
 * Describes the request for updating workspace
 */
export default interface UpdateWorkspaceMessage extends NewMessage<UpdateWorkspaceMessagePayload> {
  type: 'update-workspace';
}

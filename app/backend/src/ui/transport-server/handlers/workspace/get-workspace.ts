import { MessageHandler } from '../messageHandler';
import { getWorkspace } from 'application/workspace/get-workspace';
import { GetWorkspaceResponsePayload } from 'types/transport/responses/workspace/get-workspace';
import { GetWorkspaceMessagePayload } from 'types/transport/requests/workspace/get-workspace';

/**
 * Get workspace handler
 */
export class GetWorkspaceHandler implements MessageHandler {
  public type = 'get-projects';

  /**
   * @param payload - payload from message to parse
   */
  // eslint-disable-next-line no-unused-vars
  public async handle(payload: GetWorkspaceMessagePayload | ''): Promise<GetWorkspaceResponsePayload> {
    return {
      workspace: await getWorkspace(),
    };
  }
}

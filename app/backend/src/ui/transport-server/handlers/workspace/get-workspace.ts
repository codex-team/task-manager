import { MessageHandler } from '../messageHandler';
import { getWorkspace } from 'application/workspace/get-workspace';
import { GetWorkspaceResponsePayload } from 'types/transport/responses/workspace/get-workspace';

/**
 * Get workspace handler
 */
export class GetWorkspaceHandler implements MessageHandler {
  public type = 'get-workspace';

  /**
   * This method doesn't take any payload since there is the only workspace at this time.
   */
  public async handle(): Promise<GetWorkspaceResponsePayload> {
    return {
      workspace: await getWorkspace(),
    };
  }
}

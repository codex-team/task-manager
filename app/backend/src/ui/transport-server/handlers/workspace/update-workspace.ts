import { MessageHandler } from '../messageHandler';
import { UpdateWorkspaceMessagePayload } from 'types/transport/requests/workspace/update-workspace';
import {
  UpdateWorkspaceResponsePayload
} from 'types/transport/responses/workspace/update-workspace';
import { updateWorkspace } from '../../../../application/workspace/update-workspace';

/**
 * Update workspace handler
 */
export class UpdateWorkspaceHandler implements MessageHandler {
  public type = 'update-workspace';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: UpdateWorkspaceMessagePayload): Promise<UpdateWorkspaceResponsePayload> {
    return {
      workspace: await updateWorkspace(
        payload._id,
        payload.name,
        payload.teammates
      ),
    };
  }
}

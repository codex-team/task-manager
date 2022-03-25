import { MessageHandler } from '../messageHandler';
import { updateProject } from 'application/project/update-project';
import { UpdateProjectMessagePayload } from 'types/transport/requests/project/update-project';
import { UpdateProjectResponsePayload } from 'types/transport/responses/project/update-project';

/**
 * Update project handler
 */
export class UpdateProjectHandler implements MessageHandler {
  public type = 'update-project';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: UpdateProjectMessagePayload): Promise<UpdateProjectResponsePayload> {
    return {
      project: await updateProject(
        payload.id,
        payload.title,
        payload.picture,
        payload.messengerChannelUrl
      ),
    };
  }
}

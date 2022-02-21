import { MessageHandler } from '../messageHandler';
import { createProject } from 'application/project/create-project';
import { CreateProjectMessagePayload } from 'types/transport/requests/project/create-project';
import { CreateProjectResponsePayload } from 'types/transport/responses/project/create-project';

/**
 * Create project handler
 */
export class CreateProjectHandler implements MessageHandler {
  public type = 'create-project';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: CreateProjectMessagePayload): Promise<CreateProjectResponsePayload> {
    return {
      project: await createProject(
        payload.workspaceId,
        payload.title,
        payload.picture,
        payload.messengerChannelUrl
      ),
    };
  }
}

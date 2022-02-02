import { createProject } from '../../../../db-methods/project/create';
import { MessageHandler } from '../messageHandler';
import { CreateProjectMessagePayload } from '../../../../../../types/transport/requests/project/create';
import { CreateProjectResponsePayload } from '../../../../../../types/transport/responses/project/create';

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
        payload.title,
        payload.picture,
        payload.messengerChannelUrl
      ),
    };
  }
}

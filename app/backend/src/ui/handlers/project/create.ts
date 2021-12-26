import { createProject } from '../../../db-methods/project/create';
import { MessageHandler } from '../messageHandler';

/**
 *
 */
export class CreateProject implements MessageHandler {
  public type = 'create-project';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload) {
    return {
      project: await createProject(
        payload.title,
        payload.picture,
        payload.messengerChannelUrl
      ),
    };
  }
}

import { MessageHandler } from '../messageHandler';
import { getProjects } from '../../../db-methods/project/get-projects';

/**
 *
 */
export class GetProjects implements MessageHandler {
  public type = 'get-projects';

  /**
   * @param payload - payload from message to parse
   */
  // eslint-disable-next-line no-unused-vars
  public async handle(payload) {
    return {
      projects: await getProjects(),
    };
  }
}

import { MessageHandler } from '../messageHandler';
import { getProjects } from '../../../../db-methods/project/get-projects';
import { ApiResponse } from '../../../../../../types/transport';

/**
 *
 */
export class GetProjects implements MessageHandler {
  public type = 'get-projects';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload): Promise<ApiResponse['payload'] | void> {
    return {
      projects: await getProjects(),
    };
  }
}

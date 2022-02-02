import { getProjects } from '../../../../db-methods/project/get-projects';
import { MessageHandler } from '../messageHandler';
import { ApiResponse } from '../../../../../../types/transport';
import { GetProjectsMessagePayload } from '../../../../../../types/transport/requests/project/get-projects';

/**
 * Get project handler
 */
export class GetProjects implements MessageHandler {
  public type = 'get-projects';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetProjectsMessagePayload): Promise<ApiResponse['payload'] | void> {
    return {
      projects: await getProjects(payload.workspaceId),
    };
  }
}

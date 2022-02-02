import { getProjects } from '../../../../db-methods/project/get-projects';
import { MessageHandler } from '../messageHandler';
import { GetProjectsMessagePayload } from '../../../../../../types/transport/requests/project/get-projects';
import { GetProjectsResponsePayload } from '../../../../../../types/transport/responses/project/get-projects';

/**
 * Get project handler
 */
export class GetProjects implements MessageHandler {
  public type = 'get-projects';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetProjectsMessagePayload): Promise<GetProjectsResponsePayload> {
    return {
      projects: await getProjects(payload.workspaceId),
    };
  }
}

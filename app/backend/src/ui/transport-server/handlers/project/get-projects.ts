import { MessageHandler } from '../messageHandler';
import { getProjects } from 'application/project/get-projects';
import { GetProjectsMessagePayload } from 'types/transport/requests/project/get-projects';
import { GetProjectsResponsePayload } from 'types/transport/responses/project/get-projects';

/**
 * Get project handler
 */
export class GetProjectsHandler implements MessageHandler {
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

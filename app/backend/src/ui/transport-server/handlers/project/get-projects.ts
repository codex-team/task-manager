import { MessageHandler } from '../messageHandler';
import { getProjects } from 'application/project/get-projects';
import { GetProjectsResponsePayload } from 'types/transport/responses/project/get-projects';

/**
 * Get project handler
 */
export class GetProjectsHandler implements MessageHandler {
  public type = 'get-projects';

  /**
   *
   */
  public async handle(): Promise<GetProjectsResponsePayload> {
    return {
      projects: await getProjects(),
    };
  }
}

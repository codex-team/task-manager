import { MessageHandler } from '../messageHandler';
import { getTeammates } from 'application/teammate/get-teammates';
import { GetTeammatesResponsePayload } from 'types/transport/responses/teammate/get-teammates';

/**
 * Get teammates handler
 */
export class GetTeammatesHandler implements MessageHandler {
  public type = 'get-teammates';

  /**
   *
   */
  public async handle(): Promise<GetTeammatesResponsePayload> {
    return {
      teammates: await getTeammates(),
    };
  }
}

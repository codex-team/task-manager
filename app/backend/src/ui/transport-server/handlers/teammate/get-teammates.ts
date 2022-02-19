import { MessageHandler } from '../messageHandler';
import { getTeammates } from 'application/teammate/get-teammates';
import { GetTeammatesResponsePayload } from 'types/transport/responses/teammate/get-teammates';
import { GetTeammatesMessagePayload } from 'types/transport/requests/teammate/get-teammates';

/**
 * Get teammates handler
 */
export class GetTeammatesHandler implements MessageHandler {
  public type = 'get-teammates';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetTeammatesMessagePayload): Promise<GetTeammatesResponsePayload> {
    return {
      teammates: await getTeammates(
        payload.workspaceId
      ),
    };
  }
}

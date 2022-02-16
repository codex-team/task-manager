import { MessageHandler } from '../messageHandler';
import { getStatuses } from 'application/status/get-statuses';
import { GetStatusesMessagePayload } from 'types/transport/requests/status/get-statuses';
import { GetStatusesResponsePayload } from 'types/transport/responses/status/get-statuses';

/**
 * Get statuses handler
 */
export class GetStatusesHandler implements MessageHandler {
  public type = 'get-statuses';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetStatusesMessagePayload): Promise<GetStatusesResponsePayload> {
    return {
      statuses: await getStatuses(payload.projectId),
    };
  }
}

import { MessageHandler } from '../messageHandler';
import { getTeammateById } from 'application/teammate/get-teammate-by-id';
import { GetTeammateByIdMessagePayload } from 'types/transport/requests/teammate/get-teammate-by-id';
import { GetTeammateByIdResponsePayload } from 'types/transport/responses/teammate/get-teammate-by-id';

/**
 * Get teammate by id handler
 */
export class GetTeammateByIdHandler implements MessageHandler {
  public type = 'get-teammate-by-id';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: GetTeammateByIdMessagePayload): Promise<GetTeammateByIdResponsePayload> {
    return {
      teammate: await getTeammateById(
        payload.id
      ),
    };
  }
}

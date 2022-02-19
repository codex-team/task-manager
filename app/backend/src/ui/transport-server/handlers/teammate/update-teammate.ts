import { MessageHandler } from '../messageHandler';
import { updateTeammate } from 'application/teammate/update-teammate';
import { UpdateTeammateMessagePayload } from 'types/transport/requests/teammate/update-teammate';
import { UpdateTeammateResponsePayload } from 'types/transport/responses/teammate/update-teammate';

/**
 * Update teammate handler
 */
export class UpdateTeammateHandler implements MessageHandler {
  public type = 'update-teammate';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: UpdateTeammateMessagePayload): Promise<UpdateTeammateResponsePayload> {
    return {
      teammate: await updateTeammate(
        payload._id,
        payload.name,
        payload.photo,
        payload.contacts
      ),
    };
  }
}

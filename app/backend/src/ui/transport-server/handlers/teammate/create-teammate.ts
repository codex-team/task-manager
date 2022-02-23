import { MessageHandler } from '../messageHandler';
import { createTeammate } from 'application/teammate/create-teammate';
import { CreateTeammateMessagePayload } from 'types/transport/requests/teammate/create-teammate';
import { CreateTeammateResponsePayload } from 'types/transport/responses/teammate/create-teammate';

/**
 * Create teammate handler
 */
export class CreateTeammateHandler implements MessageHandler {
  public type = 'create-teammate';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: CreateTeammateMessagePayload): Promise<CreateTeammateResponsePayload> {
    return {
      teammate: await createTeammate(
        payload.workspaceId,
        payload.name,
        payload.photo,
        payload.contacts
      ),
    };
  }
}

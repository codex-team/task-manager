import { MessageHandler } from '../messageHandler';
import { RemoveTeammateByIdMessagePayload } from 'types/transport/requests/teammate/remove-teammate-by-id';
import { RemoveTeammateByIdResponsePayload } from 'types/transport/responses/teammate/remove-teammate-by-id';
import { removeTeammateById } from 'application/teammate/remove-teammate-by-id';

/**
 * Get teammate by id handler
 */
export class RemoveTeammateByIdHandler implements MessageHandler {
  public type = 'remove-teammate-by-id';

  /**
   * @param payload - payload from message to parse
   */
  public async handle(payload: RemoveTeammateByIdMessagePayload): Promise<RemoveTeammateByIdResponsePayload> {
    const deletedDocument = await removeTeammateById(payload.teammateId);
    const result = deletedDocument !== null ? deletedDocument._id.toString() === payload.teammateId : false;

    return {
      teammate: deletedDocument,
      result: result,
    };
  }
}

import {NewMessage} from 'ctproto';

export interface RemoveTeammateByIdMessagePayload {
  /**
   * Id of the teammate
   */
  teammateId: string;
}

/**
 * Describes the request for deleting teammate by id
 */
export default interface RemoveTeammateByIdMessage extends NewMessage<RemoveTeammateByIdMessagePayload> {
  type: 'remove-teammate-by-id'
}

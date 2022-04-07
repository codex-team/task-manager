import { NewMessage } from 'ctproto';

export interface GetTeammatesMessagePayload {
}

/**
 * Describes the request for getting teammates
 */
export default interface GetTeammatesMessage extends NewMessage<GetTeammatesMessagePayload> {
  type: 'get-teammates';
}

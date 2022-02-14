import { ResponseMessage } from 'ctproto';
import { Status } from '../../../entities';

/**
 * Response for 'update-status' message
 */
export interface UpdateStatusResponsePayload {
  /**
   * Response sample
   */
  status?: Status | null;
}

/**
 * Describes the response of updating status
 */
export default interface UpdateStatusResponse extends ResponseMessage<UpdateStatusResponsePayload> {}

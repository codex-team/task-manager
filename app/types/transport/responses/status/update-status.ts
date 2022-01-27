import { ResponseMessage } from 'ctproto';
import { Status } from '../../../entities'

/**
 * Response payload for 'update-status' message
 */
export interface UpdateStatusResponsePayload {
  /**
   * Updated status
   */
  status?: Status | null
}

/**
 * Update status message response 
 */
export default interface UpdateStatusResponse extends ResponseMessage<UpdateStatusResponsePayload> {}
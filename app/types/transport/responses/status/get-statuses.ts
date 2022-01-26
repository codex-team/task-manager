import Status from '../../../entities/status'
import { ResponseMessage } from 'ctproto'


/**
 * Response for 'get-statuses' message
 */
export interface GetStatusesResponsePayload {
  /**
   * List of statuses belonging to specified project
   */
  statuses: Status[]
}

export default interface GetStatusesResponse extends ResponseMessage<GetStatusesResponsePayload> {}
import { NewMessage } from 'ctproto';

export interface GetStatusesMessagePayload {
  /**
   * Id of the project requested statuses belong to
   */
  projectId: string;
}

/**
 * Describes the request for getting list of statuses
 */
export default interface GetStatusesMessage extends NewMessage<GetStatusesMessagePayload> {
  type: 'get-statuses'
}

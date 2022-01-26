import { NewMessage } from "ctproto";

export interface GetStatusesPayload {
  /**
   * Id of the project requested statuses belong to
   */
  projectId: string
}

export default interface GetStatusesMessage extends NewMessage<GetStatusesPayload> {
  type: 'get-statuses'
}
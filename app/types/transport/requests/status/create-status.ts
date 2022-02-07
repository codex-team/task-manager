
import { NewMessage } from 'ctproto';

export interface CreateStatusPayload {
  /**
   * Status label
   */
  label: string

  /**
   * Id of the project status belongs to
   */
  projectId?: string
}

/**
 * Describes the request for creating a status
 */
export default interface CreateStatusMessage extends NewMessage<CreateStatusPayload> {
  type: 'create-status';
}

import { Status } from '../../../../../types/entities';
import StatusModel from '../../../database/models/status';
import { CreateStatusPayload } from '../../../../../types/transport/requests/status/create-status';


/**
 * Creates new status with specified params
 *
 * @param data - status create params
 */
export async function createStatus(data: CreateStatusPayload): Promise<Status> {
  return StatusModel.create(data);
}
import { Status } from '../../../../../types/entities';
import { UpdateStatusPayload } from '../../../../../types/transport/requests/status/update-status';
import StatusModel from '../../../database/models/status';

/**
 * Updates status
 *
 * @param data - status update params
 */
export async function updateStatus(data: UpdateStatusPayload): Promise<Status | null> {
  const query = { _id: data._id };

  return StatusModel.findOneAndUpdate(query, data).exec();
}
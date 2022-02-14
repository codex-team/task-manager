
import { Status } from '../../../../../types/entities';
import StatusModel from '../../../database/models/status';
import { UpdateStatusPayload } from '../../../../../types/transport/requests/status/update-status';


/**
 * Updates status with specified params
 *
 * @param data - status update params
 */
export async function updateStatus(data: UpdateStatusPayload): Promise<Status | null> {
  const query = { _id: data._id };

  return StatusModel.findOneAndUpdate(query, data, { new: true }).exec();
}
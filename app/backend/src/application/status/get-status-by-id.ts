import { Status } from 'types/entities';
import StatusModel from 'database/models/status';

/**
 * Returns status with specified id
 *
 * @param id - id of the status
 */
export async function getStatusById(id: string): Promise<Status | null> {
  return StatusModel.findById(id).exec();
}


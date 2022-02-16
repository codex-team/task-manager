import { Status } from 'types/entities';
import StatusModel from 'database/models/status';

/**
 * Creates new status with specified params
 *
 * @param label - status label
 * @param [projectId] - project id
 */
export async function createStatus(label: string, projectId?: string): Promise<Status> {
  const data = {
    label,
    projectId,
  };

  return StatusModel.create(data);
}

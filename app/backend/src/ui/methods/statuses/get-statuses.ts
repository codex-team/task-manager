import Status from '../../../../../types/entities/status';
import StatusSchema from '../../../database/models/status';

/**
 * Returns list of statuses available for project with specified id
 *
 * @param projectId - id of the project statuses belong to
 */
export async function getStatuses(projectId: string): Promise<Status[]> {
  return StatusSchema
    .find({ projectId })
    .exec();
}

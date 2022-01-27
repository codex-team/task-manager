import Teammate from '../../../../../types/entities/teammate';
import TeammateSchema from '../../../database/models/teammate';

/**
 * Returns list of stored teammates
 *
 * @param workspaceId - teammate's workspace identifier
 */
export async function getTeammates(workspaceId: string): Promise<Teammate[]> {
  return TeammateSchema
    .find({ workspaceId: workspaceId })
    .exec();
}

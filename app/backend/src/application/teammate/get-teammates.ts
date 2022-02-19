import { Teammate } from 'types/entities';
import TeammateSchema from 'database/models/teammate';

/**
 * Returns list of stored teammates
 *
 * @param [workspaceId] - workspace id
 */
export async function getTeammates(workspaceId?: string): Promise<Teammate[]> {
  return TeammateSchema
    .find({ workspaceId: workspaceId })
    .exec();
}

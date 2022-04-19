import { Teammate } from 'types/entities';
import TeammateSchema from 'database/models/teammate';

/**
 * Returns list of stored teammates
 */
export async function getTeammates(): Promise<Teammate[]> {
  return TeammateSchema
    .find({ })
    .exec();
}

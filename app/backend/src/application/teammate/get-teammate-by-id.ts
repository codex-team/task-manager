import { Teammate } from 'types/entities';
import TeammateSchema from 'database/models/teammate';

/**
 * Returns teammate by id or null
 *
 * @param id - teammate's identifier
 */
export async function getTeammateById(id: string): Promise<Teammate | null> {
  return TeammateSchema.findById(id).exec();
}

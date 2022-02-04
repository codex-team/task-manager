import Teammate from '../../../../../types/entities/teammate';
import TeammateSchema from '../../../database/models/teammate';

/**
 * Returns teammate by id or null
 *
 * @param teammateId - teammate's identifier
 */
export async function getTeammateById(teammateId: string): Promise<Teammate | null> {
  return TeammateSchema.findById(teammateId).exec();
}

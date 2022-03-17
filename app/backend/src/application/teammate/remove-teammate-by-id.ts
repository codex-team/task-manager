import TeammateModel from 'database/models/teammate';
import { Teammate } from 'types/entities';

/**
 * @param _id - teammate's id
 */
export async function removeTeammateById(_id: string): Promise<Teammate | null> {
  return await TeammateModel.findOneAndDelete({
    _id,
  }).exec();
}

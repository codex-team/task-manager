import TeammateModel from 'database/models/teammate';

/**
 * @param _id - teammate's id
 */
export async function removeTeammateById(_id: string): Promise<void> {
  await TeammateModel.findOneAndRemove({
    _id,
  }).exec();
}

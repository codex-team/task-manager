import TeammateModel from '../../../database/models/teammate';

/**
 * @param teammateId
 */
export async function removeTeammateById(teammateId: string) :Promise<void> {
  await TeammateModel.findOneAndRemove({ _id: teammateId }).exec();
}

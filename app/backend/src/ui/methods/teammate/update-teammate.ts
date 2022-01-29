import Teammate from '../../../../../types/entities/teammate';
import { UpdateTeammatePayload } from '../../../../../types/transport/requests/teammate/update-teammate';
import TeammateModel from '../../../database/models/teammate';

/**
 * Updates existing teammate
 *
 * @param data - teammate update params
 */
export async function updateTeammate(data: UpdateTeammatePayload): Promise<Teammate | null> {
  const query = { _id: data._id };

  return TeammateModel.findOneAndUpdate(query, data).exec();
}

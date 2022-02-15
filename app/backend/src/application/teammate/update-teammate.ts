import { Teammate } from 'types/entities';
import ContactType from 'types/entities/contactType';
import TeammateModel from 'database/models/teammate';

/**
 * Updates existing teammate
 *
 * @param _id - teammate's id
 * @param name - name of teammate
 * @param photo - link to teammate's photo
 * @param contacts - list of contacts
 */
export async function updateTeammate(_id: string, name?: string, photo?: string, contacts?: [{type: ContactType, value: string}]): Promise<Teammate | null> {
  const query = { _id };
  const data = {
    _id,
    name,
    photo,
    contacts,
  };

  return TeammateModel.findOneAndUpdate(query, data).exec();
}

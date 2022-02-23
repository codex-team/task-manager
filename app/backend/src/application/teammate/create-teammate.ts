import { Teammate } from 'types/entities';
import ContactType from 'types/entities/contactType';
import TeammateSchema from 'database/models/teammate';

/**
 * Creates new teammate
 *
 * @param workspaceId - workspace id which teammate relies on
 * @param name - name of teammate
 * @param [photo] - link to teammate's photo
 * @param [contacts] - list of contacts
 */
export async function createTeammate(workspaceId:string, name: string, photo?: string, contacts?: [{type?: ContactType, value: string}]): Promise<Teammate> {
  return await TeammateSchema.create({
    workspaceId,
    name,
    photo,
    contacts,
  });
}

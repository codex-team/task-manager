import { Project } from 'types/entities';
import { CreateProjectResponsePayload } from 'types/transport/responses/project/create';
import client from 'utils/ctproto-client';

/**
 * Creates new project
 *
 * @param data - new project data
 */
export async function createProject(data: Project): Promise<CreateProjectResponsePayload> {
  const response = await client.send('create-project', data);

  return response as CreateProjectResponsePayload;
}
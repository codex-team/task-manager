import client from 'transport/ctproto-client';
import { CreateProjectResponsePayload } from 'types/transport/responses/project/create';
import { GetProjectsMessagePayload } from 'types/transport/requests/project/get-projects';
import { GetProjectsResponsePayload } from 'types/transport/responses/project/get-projects';
import { CreateProjectPayload } from 'types/transport/requests/project/create';

/**
 * Creates new project
 *
 * @param data - new project data
 */
export async function createProject(data: CreateProjectPayload): Promise<CreateProjectResponsePayload> {
  const response = await client.send('create-project', data);

  return response as CreateProjectResponsePayload;
}

/**
 * Get projects
 *
 * @param data - workspace id
 */
export async function getProjects( data: GetProjectsMessagePayload): Promise<GetProjectsResponsePayload> {
  const response = await client.send('get-projects', data);

  return response as GetProjectsResponsePayload;
}

import client from 'transport/ctproto-client';
import { CreateProjectResponsePayload } from 'types/transport/responses/project/create-project';
import { GetProjectsMessagePayload } from 'types/transport/requests/project/get-projects';
import { GetProjectsResponsePayload } from 'types/transport/responses/project/get-projects';
import { UpdateProjectPayload } from 'types/transport/requests/project/update-project';
import { CreateProjectMessagePayload } from 'types/transport/requests/project/create-project';

/**
 * Creates new project
 *
 * @param data - new project data
 */
export async function createProject(data: CreateProjectMessagePayload): Promise<CreateProjectResponsePayload> {
  const response = await client.send('create-project', data);

  return response as CreateProjectResponsePayload;
}

/**
 * Update project
 *
 * @param data - updated project data
 */
export async function updateProject(data: UpdateProjectPayload): Promise<CreateProjectResponsePayload> {
  const response = await client.send('update-project', data);

  return response as CreateProjectResponsePayload;
}


/**
 * Get projects
 *
 * @param data - workspace id
 */
export async function getProjects(data: GetProjectsMessagePayload): Promise<GetProjectsResponsePayload> {
  const response = await client.send('get-projects', data);

  return response as GetProjectsResponsePayload;
}

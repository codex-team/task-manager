import { CreateProjectResponsePayload } from 'types/transport/responses/project/create';
import client from 'transport/ctproto-client';
import { GetProjectsMessagePayload } from 'types/transport/requests/project/get-projects';
import { GetProjectsResponsePayload } from 'types/transport/responses/project/get-projects';

/**
 * Represents data needed to create new project
 */
interface CreateProjectPayload {
  /**
   * Project's visible title
   */
  title: string

  /**
   * Project's visible picture
   */
  picture?: string

  /**
   * URL of a Channel in a messenger in where reports and notifies will be sent
   */
  messengerChannelUrl?: string
}

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

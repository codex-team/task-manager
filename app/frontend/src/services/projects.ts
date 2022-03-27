import client from 'transport/ctproto-client';
import { CreateProjectResponsePayload } from 'types/transport/responses/project/create-project';
import { GetProjectsMessagePayload } from 'types/transport/requests/project/get-projects';
import { GetProjectsResponsePayload } from 'types/transport/responses/project/get-projects';
import { UpdateProjectResponsePayload } from 'types/transport/responses/project/update-project';
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
 * Describes data needed to update project.
 */
export interface UpdateProjectData {
  /**
   * Id of project to be updated
   */
  id: string;
  /**
   * Title of creating project
   */
  title: string;
  /**
   * Link to project's picture
   */
  picture?: string;
  /**
   * Link to the project's messenger channel
   */
  messengerChannelUrl?: string;
}

/**
 * Update project
 *
 * @param data - updated project data
 */
export async function updateProject(data: UpdateProjectData): Promise<UpdateProjectResponsePayload> {
  const response = await client.send('update-project', data);

  return response as UpdateProjectResponsePayload;
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

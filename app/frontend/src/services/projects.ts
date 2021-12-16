import { Project } from 'types/entities';
import { CreateProjectResponsePayload } from 'types/transport/responses/project/create';
import client from 'transport/ctproto-client';

/**
 * Represents data needed to create new project
 */
type CreateProjectPayload = Omit<Project, 'id' | 'dateCreated'>;

/**
 * Creates new project
 *
 * @param data - new project data
 */
export async function createProject(data: CreateProjectPayload): Promise<CreateProjectResponsePayload> {
  const response = await client.send('create-project', data);

  return response as CreateProjectResponsePayload;
}
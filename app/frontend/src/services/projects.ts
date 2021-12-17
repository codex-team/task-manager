import { CreateProjectResponsePayload } from 'types/transport/responses/project/create';
import client from 'transport/ctproto-client';

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
import client from 'transport/ctproto-client';
import { GetStatusesResponsePayload } from 'types/transport/responses/status/get-statuses';

/**
 * Get statuses for specified project
 *
 * @param projectId - id of the project statuses belong to
 */
export async function getStatuses(projectId: string): Promise<GetStatusesResponsePayload> {
  const response = await client.send('get-statuses', { projectId });

  return response as GetStatusesResponsePayload;
}

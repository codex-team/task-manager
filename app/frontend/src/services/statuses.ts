import client from 'transport/ctproto-client';
import { UpdateStatusPayload } from 'types/transport/requests/status/update-status';
import { GetStatusesResponsePayload } from 'types/transport/responses/status/get-statuses';
import { UpdateStatusResponsePayload } from 'types/transport/responses/status/update-status';

/**
 * Get statuses for specified project
 *
 * @param projectId - id of the project statuses belong to
 */
export async function getStatuses(projectId: string): Promise<GetStatusesResponsePayload> {
  const response = await client.send('get-statuses', { projectId });

  return response as GetStatusesResponsePayload;
}


/**
 * Update status
 *
 * @param data - status update params
 */
export async function updateStatus(data: UpdateStatusPayload): Promise<UpdateStatusResponsePayload> {
  const response = await client.send('update-status', data);

  return response as UpdateStatusResponsePayload;
}
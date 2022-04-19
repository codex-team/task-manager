import client from 'transport/ctproto-client';
import { UpdateWorkspaceMessagePayload } from 'types/transport/requests/workspace/update-workspace';
import {
  UpdateWorkspaceResponsePayload
} from 'types/transport/responses/workspace/update-workspace';
import { GetWorkspaceResponsePayload } from 'types/transport/responses/workspace/get-workspace';
import { GetWorkspaceMessagePayload } from 'types/transport/requests/workspace/get-workspace';

/**
 * Get workspace
 *
 * @param data - get workspace data
 */
export async function getWorkspace(data: GetWorkspaceMessagePayload): Promise<GetWorkspaceResponsePayload> {
  const response = await client.send('get-workspace', data);

  return response as GetWorkspaceResponsePayload;
}

/**
 * Updates workspace
 *
 * @param data - update workspace data
 */
export async function updateWorkspace(data: UpdateWorkspaceMessagePayload): Promise<UpdateWorkspaceResponsePayload> {
  const response = await client.send('update-workspace', data);

  return response as UpdateWorkspaceResponsePayload;
}

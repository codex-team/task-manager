import client from 'transport/ctproto-client';
import { CreateTeammatePayload } from 'types/transport/requests/teammate/create';
import { CreateTeammateResponsePayload } from 'types/transport/responses/teammate/create';
import { GetTeammatesMessagePayload } from 'types/transport/requests/teammate/get-teammates';
import { GetTeammatesResponsePayload } from 'types/transport/responses/teammate/get-teammates';
import { GetTeammateByIdMessagePayload } from 'types/transport/requests/teammate/get-teammate-by-id';
import { GetTeammateByIdResponsePayload } from 'types/transport/responses/teammate/get-teammate-by-id';
import { UpdateTeammatePayload } from 'types/transport/requests/teammate/update-teammate';
import { UpdateTeammateResponsePayload } from 'types/transport/responses/teammate/update-teammate';
import { RemoveTeammateByIdMessagePayload } from 'types/transport/requests/teammate/remove-teammate-by-id';
import { RemoveTeammateByIdResponsePayload } from 'types/transport/responses/teammate/remove-teammate-by-id';

/**
 * Creates new teammate
 *
 * @param data - new teammate data
 */
export async function createTeammate(data: CreateTeammatePayload): Promise<CreateTeammateResponsePayload> {
  const response = await client.send('create-teammate', data);

  return response as CreateTeammateResponsePayload;
}

/**
 * Returns list of teammates
 *
 * @param data - query params
 */
export async function getTeammates(data: GetTeammatesMessagePayload): Promise<GetTeammatesResponsePayload> {
  const response = await client.send('get-teammates', data);

  return response as GetTeammatesResponsePayload;
}

/**
 * Returns a teammate by teammate id
 *
 * @param id - teammate id
 */
export async function getTeammateById(id: string): Promise<GetTeammateByIdResponsePayload> {
  const data: GetTeammateByIdMessagePayload = {
    teammateId: id,
  };

  const response = await client.send('get-teammate-by-id', data);

  return response as GetTeammateByIdResponsePayload;
}

/**
 * Update a teammate
 *
 * @param data - update teammate data
 */
export async function updateTeammate(data: UpdateTeammatePayload): Promise<UpdateTeammateResponsePayload> {
  const response = await client.send('update-teammate', data);

  return response as UpdateTeammateResponsePayload;
}

/**
 * Remove a teammate by id
 *
 * @param id - teammate id
 */
export async function RemoveTeammateById(id: string): Promise<RemoveTeammateByIdResponsePayload> {
  const data: RemoveTeammateByIdMessagePayload = {
    teammateId: id,
  };

  const response = await client.send('remove-teammate-by-id', data);

  return response as RemoveTeammateByIdResponsePayload;
}


import { CTProtoServer } from 'ctproto';
import { AuthorizeMessagePayload } from '../../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../../types/transport';
import { createProject } from './methods/projects/create';
import { updateTitle } from './methods/projects/update-title';
import { updatePicture } from './methods/projects/update-picture';
import { updateChannel } from './methods/projects/update-channel';
import {getProjects} from "./methods/projects/get-projects";

/**
 * Available options of CTProto transport
 */
export interface TransportServerOptions {
  /**
   * What token we should use to authorize clients
   */
  authToken: string;
}

/**
 * Creates CTProto server instance
 *
 * @param options - available parameters
 * @param options.authToken - token we use to authorize clients
 */
export function createTransportServer({ authToken }: TransportServerOptions): CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate> {
  return new CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
    port: 3080,
    async onAuth(authRequestPayload: AuthorizeMessagePayload): Promise<AuthorizeResponsePayload> {
      if (authRequestPayload.token == authToken) {
        return {
          userId: '123',
        };
      }

      throw new Error('Example of unsuccessful auth');
    },

    async onMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
      if (message.type === 'create-project') {
        return {
          project: await createProject(message.payload.title,
            message.payload.picture, message.payload.messengerChannelUrl),
        };
      }

      if (message.type === 'update-project-channel') {
        return {
          project: await updateChannel(message.payload.id, message.payload.newChannel),
        };
      }

      if (message.type === 'update-project-picture') {
        return {
          project: await updatePicture(message.payload.id, message.payload.newPicture),
        };
      }

      if (message.type === 'update-project-title') {
        return {
          project: await updateTitle(message.payload.id, message.payload.newTitle),
        };
      }


      if (message.type === 'get-projects') {
        return {
          projects: await getProjects(message.payload.workspaceId),
        };
      }
    },
  });
}

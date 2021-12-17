import { CTProtoServer } from 'ctproto';
import { AuthorizeMessagePayload } from '../../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../../types/transport';
import { Config } from '../config/config';
import { createProject } from './methods/projects/create';
import { updateTitle } from './methods/projects/update-title';
import { updatePicture } from './methods/projects/update-picture';
import { updateChannel } from './methods/projects/update-channel';

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
  const CTPROTO_SERVER_HOST = '127.0.0.1';
  const CTPROTO_SERVER_PORT = parseInt(Config.CTPROTO_SERVER_PORT);

  return new CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
    host: CTPROTO_SERVER_HOST,
    port: CTPROTO_SERVER_PORT,
    async onAuth(authRequestPayload: AuthorizeMessagePayload): Promise<AuthorizeResponsePayload> {
      if (authRequestPayload.token == authToken) {
        /**
         * Lets imagine that we have a nice auth check
         * Returns fake auth data
         */
        return {
          userId: '123',
        };
      }

      throw new Error('Example of unsuccessful auth');
    },

    async onMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
      if (message.type === 'create-project') {
        await createProject(message.payload.title,
          message.payload.picture, message.payload.messengerChannelUrl);

        return {
          message: 'project created',
        };
      }

      if (message.type === 'update-project-title') {
        await updateTitle(message.payload.id, message.payload.newTitle);

        return {
          message: 'project title updated: ' + message.payload.id,
        };
      }

      if (message.type === 'update-project-picture') {
        await updatePicture(message.payload.id, message.payload.newPicture);

        return {
          message: 'project picture updated: ' + message.payload.id,
        };
      }

      if (message.type === 'update-project-channel') {
        await updateChannel(message.payload.id, message.payload.newChannel);

        return {
          message: 'project picture updated: ' + message.payload.id,
        };
      }

      if (message.type === 'get-projects') {
        return {
          projects: [
            {
              id: 'pj1',
              title: 'Project 1',
              picture: 'https://example.com/picture.png',
              dateCreated: '2014-01-01T08:15:39.736Z',
            },
            {
              id: 'pj2',
              title: 'Project 2',
              picture: 'https://example.com/picture.png',
              dateCreated: '2014-01-01T08:15:39.736Z',
            },
          ],
        };
      }
    },
  });
}

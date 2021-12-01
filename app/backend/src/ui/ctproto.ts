import { CTProtoServer } from 'ctproto';
import { AuthorizeMessagePayload } from '../../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../../types/transport';

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
    port: 3080 ,
    async onAuth(authRequestPayload: AuthorizeMessagePayload): Promise<AuthorizeResponsePayload> {
      if (authRequestPayload.token == authToken) {
        return {
          userId: '123',
        };
      }

      throw new Error('Example of unsuccessful auth');
    },

    async onMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
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

import { CTProtoServer } from 'ctproto';
import { AuthorizeMessagePayload } from 'types/transport/requests/authorize';
import { AuthorizeResponsePayload } from 'types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from 'types/transport';
import { Config } from 'config/config';
import { dispatchMessage } from './messageDispatcher';

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
  const CTPROTO_SERVER_HOST = '0.0.0.0';
  const CTPROTO_SERVER_PORT = parseInt(Config.CTPROTO_SERVER_PORT);

  return new CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
    host: CTPROTO_SERVER_HOST,
    port: CTPROTO_SERVER_PORT,
    async onAuth(authRequestPayload: AuthorizeMessagePayload): Promise<AuthorizeResponsePayload> {
      if (authRequestPayload.token == authToken) {
        return {
          userId: '123',
        };
      }

      throw new Error('Example of unsuccessful auth');
    },

    async onMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
      return dispatchMessage(message);
    },

  });
}

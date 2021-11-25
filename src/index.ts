import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';

import { CTProtoServer } from 'ctproto/src/server';
import { ApiRequest, ApiResponse, ApiUpdate } from 'ctproto/example/types';
import { AuthorizeMessagePayload } from 'ctproto/example/types/requests/authorize';
import { AuthorizeResponsePayload } from 'ctproto/example/types/responses/authorize';
import { authTokenMock } from 'ctproto/example/mocks/authorizeRequestPayload';

/**
 * Backend server params
 */
const HOST = '0.0.0.0';
const PORT = 3000;

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'frontend', 'build'),
  prefix: '/',
});

server.get('/api', (_request, reply) => {
  reply.send('Hello, BACKEND!');
});

server.listen(PORT, HOST, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

/**
 * Codex tcp protocol
 */
// eslint-disable-next-line
const transport = new CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
  port: 8080,
  async onAuth(authRequestPayload: AuthorizeMessagePayload) : Promise<AuthorizeResponsePayload> {
    if (authRequestPayload.token == authTokenMock) {
      return {
        userId: '123',
      };
    }

    throw new Error('Example of unsuccessful auth');
  },

  async onMessage(message) : Promise<void | ApiResponse['payload']> {
    console.log(message.payload);
  },
});

import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { CTProtoServer } from 'ctproto/src/server';

/**
 * Backend server params
 */
const HOST = 'localhost';
const PORT = 8080;

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

const transport = new CTProtoServer({
  port: PORT,
  path: '/client',
  async onAuth(authRequestPayload){
    const user = aurhorizeUser(authRequestPayload);

    if (!user) {
      throw new Error('Wrong auth payload');
    }

    return {
      user
    };
  },

  async onMessage(message) {
    // server to something
  },
});

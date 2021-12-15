import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { createTransportServer } from './ui/ctproto';
import { Config } from './config/config';

/**
 * Backend server params
 */
const HOST = Config.host;
const PORT = Config.port;

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'frontend', 'build'),
  prefix: '/',
});

server.listen(PORT, HOST, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

/**
 * Transport for communication with client
 */
createTransportServer({
  authToken: Config.ctprotoToken,
});

import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { createTransportServer } from './ui/ctproto';
import { Config } from './config/config';

const server = fastify();

/**
 * Set up an endpoint to return static files
 */
server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'frontend', 'build'),
  prefix: '/',
});

/**
 * Set up a js code with environment variables to be used
 * in the frontend runtime as a phantom script file.
 */
server.route({
  method: 'GET',
  url: '/public-env.js',
  handler: function (request, reply) {
    /**
     * Define list of public env vars to be available on the frontend side
     */
    const ENV_FRONTEND = {
      SERVER_ENDPOINT: Config.SERVER_ENDPOINT,
      CTPROTO_ENDPOINT: Config.CTPROTO_ENDPOINT,
    };

    /**
     * Assign envs object to window.config variable
     */
    reply.send(`window.config = ${JSON.stringify(ENV_FRONTEND)};`);
  },
});


/**
 * Define server init params
 */
const SERVER_HOST = '0.0.0.0';
const SERVER_PORT = Config.SERVER_PORT;

server.listen(SERVER_PORT, SERVER_HOST, (err, address) => {
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
  authToken: Config.CTPROTO_TOKEN,
});

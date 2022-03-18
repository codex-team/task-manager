import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { createTransportServer } from 'ui/transport-server';
import { Config } from 'config/config';
import scheduler from './application/scheduler';
import { JobType } from 'types/entities/job';

const server = fastify();

/**
 * Set up an endpoint to return static files
 */
server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'frontend', 'build'),
  prefix: '/',
});

/**
 * User react for undefined routes
 */
server.setNotFoundHandler(function (request, reply) {
  reply.sendFile('index.html');
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
      CTPROTO_TOKEN: Config.CTPROTO_TOKEN,
    };

    /**
     * Assign envs object to window.config variable
     */
    reply.send(`window.config = ${JSON.stringify(ENV_FRONTEND)};`);
  },
});


/**
 * Define server initial params
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

/**
 * Start scheduler
 */
scheduler().start();

scheduler().addJob(JobType.REPORT_PROJECT_LABEL, { pr: 1 }, '*/1 * * * * *');
scheduler().addJob(JobType.REPORT_PROJECT_LABEL, { pr: 2 }, '*/2 * * * * *');

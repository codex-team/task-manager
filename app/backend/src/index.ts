import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';

/**
 * Backend server params
 */
const HOST = '0.0.0.0';
const PORT = 3000;

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'frontend', 'build'),
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

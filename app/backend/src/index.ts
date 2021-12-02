import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { createTransportServer } from './ui/ctproto';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

/**
 * Backend server params
 */
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '3000';

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
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
});

import fastify from 'fastify'

const server = fastify()

server.get('/', (_request, reply) => {
  reply.send("Hello, World!");
});

server.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
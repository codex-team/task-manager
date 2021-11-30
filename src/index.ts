import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import Project from './database/models/project';

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

interface IProject {
  projectName: string;
  projectMessenger: string;
  projectPicture: string;
}

server.post('/api/createProject', (_request, reply) => {
  const obj: IProject = _request.body as IProject;

  const newProject = new Project({
    name: obj.projectName,
    messengerChannelUrl: obj.projectMessenger,
    picture: obj.projectPicture,
  });

  newProject.save().then(() => {
    reply.send('project saved');
  });
});


server.get<{
  Querystring: IProject,
}>('/api/findProjectByName', (_request, reply) => {
  const { projectName } = _request.query;

  Project.findByName(projectName).then(
    response => reply.send(response),
    error => reply.send(error)
  );
});

server.get<{
  Querystring: IProject,
}>('/api/getProjectId', (_request, reply) => {
  const { projectName } = _request.query;

  Project.findByName(projectName).then(
    response => reply.send(response._id),
    error => reply.send(error)
  );
});

interface IName {
  projectName: string,
  newName: string,
}

server.post('/api/updateProjectName', (_request, reply) => {
  const obj: IName = _request.body as IName;

  Project.findByName(obj.projectName).then(
    response => {
      response.name = obj.newName;
      response.save().then(() => {
          reply.send('Updated project name');
        })},
    error => reply.send(error)
  );
});


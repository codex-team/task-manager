import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { createTransportServer } from './ui/ctproto';

// import Project from './database/models/project';
// import mongoose from './database';

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

server.listen(PORT, HOST, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

// interface IProject {
//   projectId: mongoose.Types.ObjectId;
//   projectName: string;
//   projectNewName: string;
//   projectMessenger: string;
//   projectPicture: string;
// }
//
// server.post('/api/createProject', (_request, reply) => {
//   const obj: IProject = _request.body as IProject;
//
//   const newProject = new Project({
//     name: obj.projectName,
//     messengerChannelUrl: obj.projectMessenger,
//     picture: obj.projectPicture,
//   });
//
//   newProject.save().then(() => {
//     reply.send('project saved ' + newProject._id);
//   });
// });
//
//
// server.post('/api/updateProjectName', (_request, reply) => {
//   const obj: IProject = _request.body as IProject;
//
//   Project.findById(obj.projectId).then(
//     response => {
//       if (response == null) {
//         reply.send('Did not find project');
//       } else {
//         response.updateName(obj.projectNewName).then(() => {
//           reply.send('Updated project name');
//         });
//       }
//     },
//     error => reply.send(error)
//   );
// });
//
//
// server.get<{
//   Querystring: IProject,
// }>('/api/findProjectById', (_request, reply) => {
//   const { projectId } = _request.query;
//
//   Project.findById(projectId).then(
//     response => reply.send(response),
//     error => reply.send(error)
//   );

/**
 * Transport for communication with client
 */
createTransportServer({
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
});

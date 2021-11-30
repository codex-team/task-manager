// Usage:
//  1. Run MongoDB or Docker-compose file
//  2. Run `ts-node test_usage.ts`
//

import Project from './models/project';

const newProject = new Project({
  name: 'Project_1',
  messengerChannelUrl: 'https://github.com/',
});

newProject.save().then(() => {
  console.log('saved to db');

  console.log(newProject.getId());
  console.log(newProject.dateCreated);
});

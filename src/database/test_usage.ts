/*
Usage:
1. Run MongoDB or Docker-compose file
2. Run `ts-node test_usage.ts`
 */

import User from './models/user';

const newUser = new User({
  name: 'SomeName',
  roleId: 2,
});

newUser.save().then(() => {
  console.log('saved to db');

  console.log(newUser.getName());

  newUser.setName('NewName').then(() => {
    console.log('new name set');
  });

  console.log(newUser.getName());
});


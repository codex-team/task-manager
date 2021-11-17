// Usage:
// 1. Run MongoDB or Docker-compose file
// 2. Run `ts-node test_usage.ts`

import User from './models/user';

const newUser = new User({
  name: 'SomeName',
  roleId: 2,
});

console.log(newUser.getUserId());
console.log(newUser.getName());
newUser.setName('NewName');
console.log(newUser.getName());


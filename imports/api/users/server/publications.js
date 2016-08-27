import { Users } from '../users';

Meteor.publish('Users.getAll', function () {
  console.log('inu');
  return Users.find();
});

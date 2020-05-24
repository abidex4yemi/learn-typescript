import { User } from './models/User';

const user = User.build({ id: 1, name: 'Yemi' });

user.on('save', () => {
  console.log(user);
});

user.save();

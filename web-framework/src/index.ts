import { User } from './models/User';

const user = new User({ name: 'Yemi', age: 10 });

user.on('click', () => {
  console.log('You click me');
});

console.log(user);

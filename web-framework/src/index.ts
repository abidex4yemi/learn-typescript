// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const user = User.build({ name: 'Yolo', age: 42 });

// const rootElement = document.querySelector('#root');

// if (rootElement) {
//   const userEdit = new UserEdit(rootElement, user);

//   userEdit.render();
// } else {
//   throw new Error('root element not found!');
// }

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './models/interfaces';
import { User } from './models/User';

const users = new Collection('http://localhost:3000/users', (json: UserProps) =>
  User.build(json)
);

users.on('change', () => {
  const rootElement = document.querySelector('#root');

  if (rootElement) {
    const userList = new UserList(rootElement, users);
    userList.render();
  } else {
    throw new Error('root element not found!');
  }
});

users.fetch();

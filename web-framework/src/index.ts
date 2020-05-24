import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.build({ name: 'Ali', age: 42 });

const rootElement = document.querySelector('#root');

const userForm = new UserForm(rootElement, user);

userForm.render();

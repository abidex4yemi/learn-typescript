import { View } from './view';
import { User } from '../models/User';
import { UserProps } from '../models/interfaces';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User details</h1>
        <div>User Name: ${this.models.get('name')}</div>
        <div>User Age: ${this.models.get('age')}</div> 
      </div>
    `;
  }
}

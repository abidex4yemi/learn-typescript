import { View } from './view';
import { User } from '../models/User';
import { UserProps } from '../models/interfaces';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    const userShow = new UserShow(this.regions.userShow, this.models);
    userShow.render();
    const userForm = new UserForm(this.regions.userForm, this.models);
    userForm.render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}

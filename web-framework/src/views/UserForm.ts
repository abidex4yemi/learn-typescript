import { View } from './view';
import { User } from '../models/User';
import { UserProps } from '../models/interfaces';

export class UserForm extends View<User, UserProps> {
  onSetAgeClick = (): void => {
    this.models.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = document.querySelector('input');

    if (input) {
      const name = input.value;

      this.models.set({ name });
    }
  };

  onSaveClick = (): void => {
    this.models.save();
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  template(): string {
    return `
    <div>
      <input placeholder="${this.models.get('name')}" />
      <button class="set-name">Change name</button>
      <button class="set-age">set random age</button>
      <button class="save-model">Save user</button>
    </div>
    `;
  }
}

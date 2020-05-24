import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public models: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.models.on('change', () => {
      this.render();
    });
  }

  onSetAgeClick = (): void => {
    this.models.setRandomAge();
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1> 
      <div>User Name: ${this.models.get('name')}</div>
      <div>User Age: ${this.models.get('age')}</div>
      <input />
      <button class="set-age">set random age</button>
    </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}

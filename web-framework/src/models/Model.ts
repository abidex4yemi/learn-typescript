import { AxiosResponse } from 'axios';
import { Sync, Events, ModelAttributes, HasID } from './interfaces';

// Note: type constraint needed for type T
export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Can not fetch without id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    const data = this.attributes.getAll();
    this.sync.save(data).then((): void => {
      this.trigger('save');
    });
  }
}

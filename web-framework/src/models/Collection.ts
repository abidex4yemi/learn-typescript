import { Eventing } from './Eventing';
import Axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootURL: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.rootURL).then((res: AxiosResponse): void => {
      res.data.forEach((value: K) => {
        const user = this.deserialize(value);
        this.models.push(user);
      });
    });

    this.trigger('change');
  }
}

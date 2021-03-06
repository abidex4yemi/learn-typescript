import axios, { AxiosPromise } from 'axios';
import { HasID } from './interfaces';

export class ApiSync<T extends HasID> {
  constructor(public rootURL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootURL}/${id}`, data);
    }

    return axios.post(this.rootURL, data);
  }
}

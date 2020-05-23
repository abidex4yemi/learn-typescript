import axios, { AxiosPromise } from 'axios';

interface HasID {
  id?: number;
}

export class Sync<T extends HasID> {
  constructor(public rootURL: string) {}

  fetch(id: string): AxiosPromise {
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

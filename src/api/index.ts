import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export const API = {
  getPosts: () => {
    return instance.get('posts').then((response: AxiosResponse) => response);
  },
  getAuthors: () => {
    return instance.get('users').then((response: AxiosResponse) => response);
  },
};

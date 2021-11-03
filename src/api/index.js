import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export const API = {
  getPosts: () => {
    return instance.get('posts').then((response) => response);
  },
  getAuthors: () => {
    return instance.get('users').then((response) => response);
  },
};

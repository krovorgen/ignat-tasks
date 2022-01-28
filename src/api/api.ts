import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/',
});

export const api = {
  auth(body?: string) {
    return instance.post(`auth/test`, { success: body ?? true });
  },
};

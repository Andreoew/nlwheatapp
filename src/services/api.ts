import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.26.160.1:4000',
});
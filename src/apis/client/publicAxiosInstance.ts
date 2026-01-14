import axios from 'axios';

export const publicAxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

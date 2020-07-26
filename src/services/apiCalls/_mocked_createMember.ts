import { AxiosRequestConfig } from 'axios';

export default (options : AxiosRequestConfig) => {
  return new Promise(resolve => {
    resolve(options.data);
  });
};
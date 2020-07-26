import Axios, { AxiosRequestConfig } from 'axios';

export default (apiEndpointUrl : string, options ?: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    Axios(apiEndpointUrl, options)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.response);
      });
  });
};
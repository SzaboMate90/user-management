import ajaxHandler from '../ajaxHandler';
import API_ENDPOINTS from '../apiEndpoints';
import { AxiosRequestConfig } from 'axios';

export default (options ?: AxiosRequestConfig) => {
  return ajaxHandler(API_ENDPOINTS.getMember, options);
};
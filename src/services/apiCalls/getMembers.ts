import ajaxHandler from '../ajaxHandler';
import API_ENDPOINTS from '../apiEndpoints';

export default () => {
  return ajaxHandler(API_ENDPOINTS.getMember);
};
import Axios from 'axios';
export default (function (apiEndpointUrl, options) {
    return new Promise(function (resolve, reject) {
        Axios(apiEndpointUrl, options)
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (error) {
            reject(error.response);
        });
    });
});
//# sourceMappingURL=ajaxHandler.js.map
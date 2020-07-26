import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducers from './reducers';
var createStore = function () { return reduxCreateStore(rootReducers); };
export default (function (_a) {
    var element = _a.element;
    return (<Provider store={createStore()}>{element}</Provider>);
});
//# sourceMappingURL=ReduxWrapper.jsx.map
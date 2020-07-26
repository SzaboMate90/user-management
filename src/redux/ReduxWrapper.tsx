import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducers from './reducers';

const createStore = () => reduxCreateStore(rootReducers);

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
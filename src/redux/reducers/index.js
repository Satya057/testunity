// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import { requestReducer } from './requestReducer';

const rootReducer = combineReducers({
  network: requestReducer
});

export default rootReducer;

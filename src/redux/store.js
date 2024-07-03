import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Note: Correcting import from 'redux-thunk'
import { requestReducer } from './reducers/requestReducer';

const rootReducer = combineReducers({
  network: requestReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;

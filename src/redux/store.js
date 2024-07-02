import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';  // Importing thunk correctly
import networkReducer from './reducers/networkReducer';
 import {thunk} from "redux-thunk";


const rootReducer = combineReducers({
  network: networkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

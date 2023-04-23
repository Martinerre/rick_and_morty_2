import thunk from 'redux-thunk'
import rootReducer from './reducer';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';

const store = createStore (rootReducer, applyMiddleware(thunk));

export default store;
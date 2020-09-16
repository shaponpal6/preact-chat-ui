import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

const INITIAL_STATE = {}
const store = createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(thunk)));

export default store;
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {mainReducer, initialState} from './reducer';

const middlewares = [thunk];

export default createStore(mainReducer, initialState, applyMiddleware(...middlewares));
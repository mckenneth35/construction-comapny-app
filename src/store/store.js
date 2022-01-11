import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import companies from '../reducers/companies';
import * as sagas from '../sagas';

const reducers = combineReducers({
  companies,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  thunk,
  createLogger({ collapsed: true }), // only for local testing
];

const store = createStore(reducers, applyMiddleware(...middlewares));

Object.values(sagas).forEach(sagaMiddleware.run);

export default store;

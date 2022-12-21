import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {SharedReducer} from './reducers/SharedReducers';

export const store = createStore(
  combineReducers({
    sharedReducer: SharedReducer,
    anotherReducer: SharedReducer,
  }),
  composeWithDevTools(applyMiddleware()),
);

import { combineReducers, createStore } from 'redux';
import { commonReducer } from './reducers';

const reducers = combineReducers({
  state: commonReducer,
});

const store = createStore(reducers);

export default store;

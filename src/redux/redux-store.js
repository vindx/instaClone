import { combineReducers, createStore } from 'redux';
import { commonReducer } from './reducers';

const reducers = combineReducers({
  //autorized user on action.payload
  state: commonReducer,
});

const enhancer = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, enhancer());

export default store;

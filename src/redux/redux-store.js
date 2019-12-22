import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { commonReducer, authReducer, usersReducer, postsReducer } from './reducers';

const reducers = combineReducers({
  //autorized user on action.payload
  // state: commonReducer,
  // posts: postsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const composeEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, composeEnhancers);

export default store;

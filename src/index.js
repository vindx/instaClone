import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import store from './redux/redux-store';
import './index.scss';

const rerenderEntireTree = state => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={state.state} dispatch={store.dispatch.bind(store)} />
    </Provider>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

const reducer = (state, action) => {
  return state;
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;

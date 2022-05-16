import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  /* state- current state, action- object informed what we should do */
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchString: action.searchString,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;

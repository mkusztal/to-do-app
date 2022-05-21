import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getAllColumns = (state) => {
  return state.columns;
};
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getAllLists = (state) => state.lists;
export const searchInputValue = (state) => state.searchInput;
export const getIsFavorite = (cards) =>
  cards.filter((card) => card.isFavorite === true);

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const updateSearch = (payload) => ({
  type: 'UPDATE_SEARCH',
  payload,
});
export const addToFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

// reducer functions
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...statePart,
        lists: [...statePart.lists, { ...action.payload, id: shortid() }],
      };
    default:
      return statePart;
  }
};

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.payload;
    default:
      return statePart;
  }
};

const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action),
  };

  return newState;
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;

import shortid from 'shortid';

// action
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creator
export const addList = (payload) => ({ type: ADD_LIST, payload });
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getAllLists = (state) => state.lists;

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...statePart,
        lists: [...statePart.lists, { ...action.payload, id: shortid() }],
      };
    default:
      return statePart;
  }
};

export default listsReducer;

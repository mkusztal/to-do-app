//action
const createActionName = (actionName) => `app/lists/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');

// action creators
export const searchInputValue = (state) => state.searchInput;
export const updateSearch = (payload) => ({
  type: UPDATE_SEARCH,
  payload,
});

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;

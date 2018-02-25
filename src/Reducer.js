import * as types from './ActionTypes.js';

const initialState = { searchBooks: '' };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SEARCHBOOKS:
      return {
        ...state,
        searchBooks: action.value
      };
    default:
      return state;
  }
};

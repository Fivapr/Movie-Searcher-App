import * as types from "./ActionTypes.js";

const initialState = {
  genres: [],
  autocompleteMovies: []
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AUTOCOMPLETE_MOVIES:
      return {
        ...state,
        autocompleteMovies: action.value
      };
    case types.GET_GENRES:
      return {
        ...state,
        genres: action.value
      };
    default:
      return state;
  }
};

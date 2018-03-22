import * as types from "./ActionTypes.js";

const initialState = {
  movies: [],
  page: "",
  pages: "",
  lastQuery: ""
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.data.results,
        pages: action.data.pages,
        page: action.data.page,
        lastQuery: action.query
      };
    default:
      return state;
  }
};

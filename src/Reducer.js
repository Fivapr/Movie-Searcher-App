import * as types from "./ActionTypes.js";

const initialState = {
  movies: [],
  genres: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.value
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

import * as types from "./ActionTypes.js";

const initialState = {
  movies: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.value
      };
    default:
      return state;
  }
};

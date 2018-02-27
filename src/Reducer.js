import * as types from "./ActionTypes.js";

const initialState = { movies: [] };

export const reducer = (state = initialState, action) => {
  console.log(state.movies);
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

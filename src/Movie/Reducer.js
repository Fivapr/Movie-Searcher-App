import * as types from "./ActionTypes.js";

const initialState = {
  currentMovie: {}
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_MOVIE:
      return {
        ...state,
        currentMovie: action.value
      };
    default:
      return state;
  }
};

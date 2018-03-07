import * as types from "./ActionTypes.js";

const initialState = {
  movies: []
};

export const homeReducer = (state = initialState, action) => {
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

import * as types from "./ActionTypes.js";

export const GET_MOVIES = value => ({
  type: types.GET_MOVIES,
  value
});

export const FETCH_TOP_RATED = () => ({
  type: types.FETCH_TOP_RATED
});

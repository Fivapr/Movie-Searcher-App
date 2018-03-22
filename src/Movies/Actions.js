import * as types from "./ActionTypes.js";

export const GET_MOVIES = (data, query) => ({
  type: types.GET_MOVIES,
  data,
  query
});

export const FETCH_TOP_RATED = () => ({
  type: types.FETCH_TOP_RATED
});

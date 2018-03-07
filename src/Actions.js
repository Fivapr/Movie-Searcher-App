import * as types from "./ActionTypes.js";

export const GET_MOVIES = value => ({
  type: types.GET_MOVIES,
  value
});

export const FETCH_TODAY_MOVIES = () => ({
  type: types.FETCH_TODAY_MOVIES
});

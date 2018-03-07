import * as types from "./ActionTypes.js";

export const FETCH_SINGLE_MOVIE = movieId => ({
  type: types.FETCH_SINGLE_MOVIE,
  movieId
});

export const GET_SINGLE_MOVIE = value => ({
  type: types.GET_SINGLE_MOVIE,
  value
});

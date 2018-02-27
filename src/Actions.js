import * as types from "./ActionTypes.js";

export const FETCH_SEARCH_BOOKS = searchPredicate => ({
  type: types.FETCH_SEARCH_BOOKS,
  searchPredicate
});

export const GET_MOVIES = value => ({
  type: types.GET_MOVIES,
  value
});

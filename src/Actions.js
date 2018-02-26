import * as types from "./ActionTypes.js";

export const FETCH_SEARCH_BOOKS = searchPredicate => ({
  type: types.FETCH_SEARCH_BOOKS,
  searchPredicate
});

export const GET_SEARCH_BOOKS = value => ({
  type: types.GET_SEARCH_BOOKS,
  value
});

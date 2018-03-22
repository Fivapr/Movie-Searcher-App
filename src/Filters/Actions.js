import * as types from "./ActionTypes.js";

export const FETCH_SEARCH_MOVIES = searchPredicate => ({
  type: types.FETCH_SEARCH_MOVIES,
  searchPredicate
});

export const FETCH_BY_EXTENDED_SEARCH = filters => ({
  type: types.FETCH_BY_EXTENDED_SEARCH,
  filters
});

export const FETCH_GENRES = () => ({
  type: types.FETCH_GENRES
});

export const FETCH_NEW_PAGE = (query, page) => ({
  type: types.FETCH_NEW_PAGE,
  query,
  page
});

export const GET_GENRES = value => ({
  type: types.GET_GENRES,
  value
});

export const FETCH_AUTOCOMPLETE_MOVIES = searchPredicate => ({
  type: types.FETCH_AUTOCOMPLETE_MOVIES,
  searchPredicate
});

export const GET_AUTOCOMPLETE_MOVIES = value => ({
  type: types.GET_AUTOCOMPLETE_MOVIES,
  value
});

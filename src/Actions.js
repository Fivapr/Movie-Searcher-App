import * as types from "./ActionTypes.js";

export const FETCH_SEARCH_MOVIES = searchPredicate => ({
  type: types.FETCH_SEARCH_MOVIES,
  searchPredicate
});

export const GET_MOVIES = value => ({
  type: types.GET_MOVIES,
  value
});

export const FETCH_GENRES = () => ({
  type: types.FETCH_GENRES
});

export const GET_GENRES = value => ({
  type: types.GET_GENRES,
  value
});

export const FETCH_BY_GENRES = id => ({
  type: types.FETCH_BY_GENRES,
  id
});

export const FETCH_AUTOCOMPLETE_MOVIES = searchPredicate => ({
  type: types.FETCH_AUTOCOMPLETE_MOVIES,
  searchPredicate
});

export const GET_AUTOCOMPLETE_MOVIES = value => ({
  type: types.GET_AUTOCOMPLETE_MOVIES,
  value
});

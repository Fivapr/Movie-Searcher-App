import * as types from './ActionTypes.js';

export const FETCH_SEARCHBOOKS = searchPredicate => ({
  type: types.FETCH_SEARCHBOOKS,
  searchPredicate
});

export const GET_SEARCHBOOKS = value => ({
  type: types.GET_SEARCHBOOKS,
  value
});

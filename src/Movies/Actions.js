import * as types from "./ActionTypes.js";

export const GET_MOVIES = (value, page, pages, query) => ({
  type: types.GET_MOVIES,
  value,
  page,
  pages,
  query
});

export const FETCH_TOP_RATED = () => ({
  type: types.FETCH_TOP_RATED
});

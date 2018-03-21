import * as types from "./ActionTypes.js";

export const FETCH_FAVORITE = sessionId => ({
  type: types.FETCH_FAVORITE,
  sessionId
});

export const ADD_TO_FAVORITE = (sessionId, movieId) => ({
  type: types.ADD_TO_FAVORITE,
  sessionId,
  movieId
});

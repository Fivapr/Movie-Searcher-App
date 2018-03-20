import * as types from "./ActionTypes.js";

export const FETCH_FAVORITES = sessionId => ({
  type: types.FETCH_FAVORITES,
  sessionId
});

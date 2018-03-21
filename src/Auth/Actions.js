import * as types from "./ActionTypes.js";

export const FETCH_SESSION_ID = (login, password) => ({
  type: types.FETCH_SESSION_ID,
  login,
  password
});

export const GET_SESSION_ID = value => ({
  type: types.GET_SESSION_ID,
  value
});

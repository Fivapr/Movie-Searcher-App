import * as types from "./ActionTypes.js";

export const FETCH_REQUEST_TOKEN = () => ({
  type: types.FETCH_REQUEST_TOKEN
});

export const FETCH_SESSION_ID = requestToken => ({
  type: types.FETCH_SESSION_ID,
  requestToken
});

export const GET_REQUEST_TOKEN = value => ({
  type: types.GET_REQUEST_TOKEN,
  value
});

export const GET_SESSION_ID = value => ({
  type: types.GET_SESSION_ID,
  value
});

export const VALIDATE_WITH_LOGIN = sessionId => ({
  type: types.VALIDATE_WITH_LOGIN,
  sessionId
});

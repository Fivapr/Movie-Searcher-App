import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";
import { GET_MOVIES } from "../Movies/ActionTypes.js";

const xhr = new XHRProvider();

function* fetchRequestToken(action) {
  const response = yield call(xhr.requestApi, `authentication/token/new?`);
  yield response.success &&
    put({
      type: types.VALIDATE_WITH_LOGIN,
      requestToken: response.request_token,
      login: action.login,
      password: action.password
    });
}

function* validateWithLogin(action) {
  const name = action.login;
  const pass = action.password;
  const response = yield call(
    xhr.requestApi,
    `authentication/token/validate_with_login?&request_token=${
      action.requestToken
    }&username=${name}&password=${pass}`
  );
  yield response.success &&
    put({ type: types.FETCH_SESSION_ID, requestToken: response.request_token });
}

function* fetchSessionId(action) {
  const response = yield call(
    xhr.requestApi,
    `authentication/session/new?&request_token=${action.requestToken}`
  );
  yield response.success &&
    put({ type: types.GET_SESSION_ID, value: response.session_id });
}

export function* auth() {
  yield takeLatest(types.FETCH_REQUEST_TOKEN, fetchRequestToken);
  yield takeLatest(types.VALIDATE_WITH_LOGIN, validateWithLogin);
  yield takeLatest(types.FETCH_SESSION_ID, fetchSessionId);
}

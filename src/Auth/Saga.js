import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";
import { GET_MOVIES } from "../Movies/ActionTypes.js";

const xhr = new XHRProvider();

function* fetchSessionId(action) {
  const response = yield call(xhr.requestApi, `authentication/token/new?`);
  const response1 = yield call(
    xhr.requestApi,
    `authentication/token/validate_with_login?&request_token=${
      response.request_token
    }&username=${action.login}&password=${action.password}`
  );
  const response2 = yield call(
    xhr.requestApi,
    `authentication/session/new?&request_token=${response.request_token}`
  );
  yield response.success &&
    put({ type: types.GET_SESSION_ID, value: response2.session_id });
}

export function* auth() {
  yield takeLatest(types.FETCH_SESSION_ID, fetchSessionId);
}

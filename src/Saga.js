import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "./DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

export function* saga() {
  console.log("Hello, Sagas!");
}

function* fetchSearchBooks(action) {
  const response = yield call(xhr.requestApi, `search/movie`, {
    query: action.searchPredicate
  });
  yield put({ type: types.GET_SEARCH_BOOKS, value: response.results });
}

export function* watchFetches() {
  yield takeLatest(types.FETCH_SEARCH_BOOKS, fetchSearchBooks);
}

export default saga;

import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

function* fetchTopRated(page = 1) {
  const response = yield call(xhr.requestApi, `movie/top_rated`);
  yield put({ type: types.GET_MOVIES, value: response.results });
}

export function* movies() {
  yield takeLatest(types.FETCH_TOP_RATED, fetchTopRated);
}

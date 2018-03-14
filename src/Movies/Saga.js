import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

function* fetchTopRated() {
  let query = `movie/top_rated?`;
  const response = yield call(xhr.requestApi, query);
  yield put({
    type: types.GET_MOVIES,
    value: response.results,
    page: response.page,
    pages: response.total_pages,
    query: query
  });
}

export function* movies() {
  yield takeLatest(types.FETCH_TOP_RATED, fetchTopRated);
}

import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

function* fetchSingleMovie(action) {
  const response = yield call(xhr.requestApi, `movie/${action.movieId}`);
  yield put({ type: types.GET_SINGLE_MOVIE, value: response });
}

export function* movie() {
  yield takeLatest(types.FETCH_SINGLE_MOVIE, fetchSingleMovie);
}

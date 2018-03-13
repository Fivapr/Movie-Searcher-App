import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import { GET_MOVIES } from "../Movies/ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

function* fetchTodayMovies() {
  let today = new Date();
  let yesterday = new Date();
  let yesterdayMonth = today.getMonth() - 1;
  yesterday.setMonth(yesterdayMonth);
  let formattedToday = today.toISOString().slice(0, 10);
  let formattedYesterday = yesterday.toISOString().slice(0, 10);

  const response = yield call(
    xhr.requestApi,
    `discover/movie?primary_release_date.gte=${formattedYesterday}&primary_release_date.lte=${formattedToday}`
  );
  yield put({ type: GET_MOVIES, value: response.results });
}

export function* home() {
  yield takeLatest(types.FETCH_TODAY_MOVIES, fetchTodayMovies);
}

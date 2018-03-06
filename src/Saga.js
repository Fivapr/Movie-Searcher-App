import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "./DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

function* fetchSearchMovies(action, page = 1) {
  const response = yield call(xhr.requestApi, `search/movie`, {
    query: action.searchPredicate,
    page: action.page
  });
  yield put({ type: types.GET_MOVIES, value: response.results });
}

function* fetchSingleMovie(action) {
  const response = yield call(xhr.requestApi, `movie/${action.movieId}`);
  yield put({ type: types.GET_SINGLE_MOVIE, value: response });
}

function* fetchGenres(action) {
  const response = yield call(
    xhr.requestApi,
    "genre/movie/list?&language=en-US&"
  );
  yield put({ type: types.GET_GENRES, value: response.genres });
}

function* fetchByGenres(action, page = 1) {
  const response = yield call(
    xhr.requestApi,
    `discover/movie?&with_genres=${action.ids.join()}&page=${page}`
  );
  yield put({ type: types.GET_MOVIES, value: response.results });
}

function* fetchAutocompleteMovies(action) {
  const response = yield call(xhr.requestApi, `search/movie`, {
    query: action.searchPredicate
  });
  yield put({ type: types.GET_AUTOCOMPLETE_MOVIES, value: response.results });
}

function* fetchTopRated(page = 1) {
  const response = yield call(xhr.requestApi, `movie/top_rated`);
  yield put({ type: types.GET_MOVIES, value: response.results });
}

function* fetchTodayMovies() {
  let today = new Date();
  let yesterday = new Date();
  let yesterdayMonth = today.getMonth() - 5;
  yesterday.setMonth(yesterdayMonth);
  let formatToday = today.toISOString().slice(0, 10);
  let formatYesterday = yesterday.toISOString().slice(0, 10);

  const response = yield call(
    xhr.requestApi,
    `discover/movie?primary_release_date.gte=${formatYesterday}&primary_release_date.lte=${formatToday}`
  );
  yield put({ type: types.GET_MOVIES, value: response.results });
}

export function* watchFetches() {
  yield takeLatest(types.FETCH_SEARCH_MOVIES, fetchSearchMovies);
  yield takeLatest(types.FETCH_GENRES, fetchGenres);
  yield takeLatest(types.FETCH_BY_GENRES, fetchByGenres);
  yield takeLatest(types.FETCH_AUTOCOMPLETE_MOVIES, fetchAutocompleteMovies);
  yield takeLatest(types.FETCH_TODAY_MOVIES, fetchTodayMovies);
  yield takeLatest(types.FETCH_TOP_RATED, fetchTopRated);
  yield takeLatest(types.FETCH_SINGLE_MOVIE, fetchSingleMovie);
}

export default watchFetches;

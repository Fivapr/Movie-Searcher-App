import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";
import { GET_MOVIES } from "../Movies/ActionTypes.js";

const xhr = new XHRProvider();

function* fetchAutocompleteMovies(action) {
  const response = yield call(xhr.requestApi, `search/movie`, {
    query: action.searchPredicate
  });
  yield put({ type: types.GET_AUTOCOMPLETE_MOVIES, value: response.results });
}

function* fetchSearchMovies(action, page = 1) {
  const response = yield call(xhr.requestApi, `search/movie`, {
    query: action.searchPredicate,
    page: action.page
  });
  yield put({ type: GET_MOVIES, value: response.results });
}

function* fetchGenres(action) {
  const response = yield call(
    xhr.requestApi,
    "genre/movie/list?&language=en-US&"
  );
  yield put({ type: types.GET_GENRES, value: response.genres });
}

function* fetchByGenres(action, page = 1) {
  let formattedStartYear = "";
  let formattedEndYear = "";
  if (action.startYear) {
    let startYear = new Date(action.startYear, 0, 2);
    formattedStartYear = startYear.toISOString().slice(0, 10);
  }
  if (action.endYear) {
    let endYear = new Date(action.endYear, 12, 1);
    formattedEndYear = endYear.toISOString().slice(0, 10);
  }

  const response = yield call(
    xhr.requestApi,
    `discover/movie?&with_genres=${action.genreIds.join()}&primary_release_date.gte=${formattedStartYear}&primary_release_date.lte=${formattedEndYear}&page=${page}`
  );
  yield put({ type: GET_MOVIES, value: response.results });
}

export function* filters() {
  yield takeLatest(types.FETCH_SEARCH_MOVIES, fetchSearchMovies);
  yield takeLatest(types.FETCH_GENRES, fetchGenres);
  yield takeLatest(types.FETCH_BY_GENRES, fetchByGenres);
  yield takeLatest(types.FETCH_AUTOCOMPLETE_MOVIES, fetchAutocompleteMovies);
}

import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./ActionTypes.js";
import { GET_MOVIES } from "../Movies/ActionTypes.js";
import XHRProvider from "../DataProvider/XHRProvider.js";

const xhr = new XHRProvider();

function* fetchFavorite(action) {
  const query = `account/{account_id}/favorite/movies?&session_id=${
    action.sessionId
  }`;
  const response = yield call(xhr.requestApi, query);
  yield put({
    type: GET_MOVIES,
    value: response.results,
    page: response.page,
    pages: response.total_pages,
    query: query
  });
}

function* addToFavorite(action) {
  const query = `account/{account_id}/favorite?&session_id=${action.sessionId}`;

  const response = yield call(xhr.postApi, query, {
    media_type: "movie",
    media_id: action.movieId,
    favorite: true
  });
}

export function* favorite() {
  yield takeLatest(types.FETCH_FAVORITE, fetchFavorite);
  yield takeLatest(types.ADD_TO_FAVORITE, addToFavorite);
}

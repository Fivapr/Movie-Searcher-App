import { put, takeLatest } from 'redux-saga/effects'
import api from 'utils/api'
import { fetchMovies, setMovies } from './reducer'

export function* fetchMoviesSaga({ payload }) {
  try {
    const { data } = yield api(payload.path, payload.params)
    yield put(setMovies(data.results))
  } catch (error) {
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(fetchMovies, fetchMoviesSaga)
}

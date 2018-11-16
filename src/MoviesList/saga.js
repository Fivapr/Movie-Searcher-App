import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import api from '../utils/api'
import db from '../utils/firebase'
import { fetchMovies, setMovies, toggleFavorite, fetchFavorites, setFavorites } from './reducer'

export function* fetchMoviesSaga({ payload }) {
  try {
    const { data } = yield api(payload.path, payload.params)
    yield put(setMovies(data.results))
  } catch (error) {
    console.log(error)
  }
}

export function* toggleFavoriteSaga({ payload }) {
  try {
    const id = payload.get('id').toString()
    const docRef = yield db.collection('favorites').doc(id)
    const doc = yield docRef.get()

    yield doc.exists ? docRef.delete() : docRef.set(payload.toJS())
  } catch (error) {
    console.log(error)
  }
}

export function* fetchFavoritesSaga({ payload }) {
  try {
    const snapshot = yield db.collection('favorites').get()
    const docs = snapshot.docs.map(doc => doc.data())

    yield put(setFavorites(docs))
  } catch (error) {
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(fetchMovies, fetchMoviesSaga)
  yield takeEvery(toggleFavorite, toggleFavoriteSaga)
  yield takeEvery(fetchFavorites, fetchFavoritesSaga)
}

import { put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import api from '../utils/api'
import { firestore as db } from '../utils/firebase'
import includes from 'lodash/includes'
import { fetchMovies, setMovies, toggleFavorite, fetchFavorites, setFavorites } from './reducer'

export function* fetchMoviesSaga({ payload: { path, params } }) {
  try {
    //prettier-ignore
    const [res, snapshot] = yield all([
      api(path, params),
      db.collection('favorites').get()
    ])
    const movies = res.data.results
    const favoriteIds = snapshot.docs.map(doc => doc.data().id)

    const moviesWithLikeField = movies.map(movie => ({
      ...movie,
      like: includes(favoriteIds, movie.id)
    }))

    yield put(setMovies(moviesWithLikeField))
  } catch (error) {
    console.log(error)
  }
}

export function* toggleFavoriteSaga({ payload: movie }) {
  try {
    const id = movie.get('id').toString()
    const docRef = yield db.collection('favorites').doc(id)
    const doc = yield docRef.get()

    const movieWithLike = movie.set('like', true).toJS()
    yield doc.exists ? docRef.delete() : docRef.set(movieWithLike)
  } catch (error) {
    console.log(error)
  }
}

export function* fetchFavoritesSaga({ payload }) {
  try {
    const snapshot = yield db.collection('favorites').get()
    const favorites = snapshot.docs.map(doc => doc.data())

    yield put(setFavorites(favorites))
  } catch (error) {
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(fetchMovies, fetchMoviesSaga)
  yield takeEvery(fetchFavorites, fetchFavoritesSaga)
  yield takeEvery(toggleFavorite, toggleFavoriteSaga)
}

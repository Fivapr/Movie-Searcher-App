import { put, all, takeLatest } from 'redux-saga/effects'
import api from '../../utils/api'
import { firestore as db } from '../../utils/firebase'
import includes from 'lodash/includes'
import { fetchMovies, setMovies } from './reducer'

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

export default function*() {
  yield takeLatest(fetchMovies, fetchMoviesSaga)
}

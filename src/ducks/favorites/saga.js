import { put, takeEvery } from 'redux-saga/effects'
import { firestore as db } from '../../utils/firebase'
import { toggleFavorite, fetchFavorites, setFavorites } from './reducer'

export function* toggleFavoriteSaga({ payload: movie }) {
  try {
    console.log('​exportfunction*toggleFavoriteSaga -> movie', movie)
    const id = movie.get('id').toString()
    const docRef = db.collection('favorites').doc(id)
    const doc = yield docRef.get()

    const movieWithLike = movie.set('like', true).toJS()
    yield doc.exists ? docRef.delete() : docRef.set(movieWithLike)
  } catch (error) {
    //notify and revert state back for optimistic ui
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
  yield takeEvery(fetchFavorites, fetchFavoritesSaga)
  yield takeEvery(toggleFavorite, toggleFavoriteSaga)
}

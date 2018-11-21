import { fork, all } from 'redux-saga/effects'
import auth from './ducks/auth/saga'
import movies from './ducks/movies/saga'
import favorites from './ducks/favorites/saga'

export default function* rootSaga() {
  yield all([fork(auth), fork(movies), fork(favorites)])
}

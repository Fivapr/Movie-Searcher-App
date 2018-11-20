import { fork, all } from 'redux-saga/effects'
import movies from './MoviesList/saga'
import auth from './auth/saga'

export default function* rootSaga() {
  yield all([fork(movies), fork(auth)])
}

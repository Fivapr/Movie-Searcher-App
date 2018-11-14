import { fork, all } from 'redux-saga/effects'
import movies from './MoviesList/saga'

export default function* rootSaga() {
  yield all([fork(movies)])
}

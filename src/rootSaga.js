import { fork, all } from 'redux-saga/effects'
import Home from './Home/saga'

export default function* rootSaga() {
  yield all([fork(Home)])
}

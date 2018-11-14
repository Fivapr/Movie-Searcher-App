import { takeLatest } from 'redux-saga/effects'
import { action } from './reducer'

export function* actionSaga() {
  try {
    yield 1
  } catch (error) {
    // error
  }
}

export default function*() {
  yield takeLatest(action, actionSaga)
}

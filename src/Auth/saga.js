import { put, takeLatest } from 'redux-saga/effects'
import firebase, { firestore } from '../utils/firebase'
import { login, logout } from './reducer'

export function* loginSaga({ payload }) {
  try {
    yield 1
  } catch (error) {
    console.log(error)
  }
}

export function* logoutSaga({ payload }) {
  try {
    yield 1
  } catch (error) {
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(login, loginSaga)
  yield takeLatest(login, logoutSaga)
}

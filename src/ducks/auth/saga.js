import firebase from 'firebase'
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'
import { login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure } from './reducer'
import { rsf } from '../../utils/firebase'

const authProvider = new firebase.auth.GoogleAuthProvider()

function* loginSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider)
    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut)
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)
    console.log('​function*loginStatusWatcher -> user', user)

    if (user) yield put(loginSuccess(user))
    else yield put(logoutSuccess())
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher)
  yield all([takeEvery(login, loginSaga), takeEvery(logout, logoutSaga)])
}

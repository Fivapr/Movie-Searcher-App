import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS({ user: null })

export const login = createAction('auth/login')
export const loginSuccess = createAction('auth/loginSuccess')
export const loginFailure = createAction('auth/loginFailure')
export const logout = createAction('auth/logout')
export const logoutSuccess = createAction('auth/logoutSuccess')
export const logoutFailure = createAction('auth/logoutFailure')

const reducer = createReducer({}, initialState)
  .on(loginSuccess, (state, user) => state.set('user', fromJS(user)))
  .on(logoutSuccess, state => state.set('user', null))

export default reducer

import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS({ user: null })

export const login = createAction('auth/login')
export const logout = createAction('auth/logout')

const reducer = createReducer({}, initialState)
  .on(login, (state, user) => state.set('user', fromJS(user)))
  .on(logout, () => state.set('user', null))

export default reducer

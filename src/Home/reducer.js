import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS({ field: 'test' })

export const action = createAction()

const reducer = createReducer({}, initialState)

export default reducer

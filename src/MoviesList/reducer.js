import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS([])

export const fetchMovies = createAction('movies/fetch')
export const setMovies = createAction('movies/set')

//prettier-ignore
const reducer = createReducer({}, initialState)
  .on(setMovies, (state, movies) => (movies))

export default reducer

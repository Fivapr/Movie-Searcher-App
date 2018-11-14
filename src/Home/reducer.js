import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS({ movies: [] })

export const fetchMovies = createAction('movies/fetch')
export const setMovies = createAction('movies/set')

//prettier-ignore
const reducer = createReducer({}, initialState)
  .on(setMovies, (state, payload) => state.set('movies', payload))

export default reducer

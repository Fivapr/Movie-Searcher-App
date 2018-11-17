import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS({ movies: [], favorites: [] })

export const fetchMovies = createAction('movies/fetch')
export const setMovies = createAction('movies/set')

export const toggleFavorite = createAction('movies/toggleFavorite')
export const fetchFavorites = createAction('movies/fetchFavorite')
export const setFavorites = createAction('movies/toggleFavorite')

const reducer = createReducer({}, initialState)
  .on(setMovies, (state, movies) => state.set('movies', fromJS(movies)))
  .on(setFavorites, (state, favorites) => state.set('favorites', fromJS(favorites)))

export default reducer

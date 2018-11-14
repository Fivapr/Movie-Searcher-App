import { createAction, createReducer } from 'redux-act'
import { fromJS, List } from 'immutable'

const initialState = fromJS({ movies: [], favorites: [] })

export const fetchMovies = createAction('movies/fetch')
export const setMovies = createAction('movies/set')

export const fetchFavorites = createAction('movies/fetchFavorite')
export const addFavorite = createAction('movies/addFavorite')
export const deleteFavorite = createAction('movies/deleteFavorite')

const reducer = createReducer({}, initialState)
  .on(setMovies, (state, movies) => state.set('movies', fromJS(movies)))
  .on(addFavorite, (state, favorite) =>
    state.update('favorites', List(), favorites => favorites.push(favorite))
  )
  .on(deleteFavorite, (state, favorite) =>
    state.update('favorites', List(), favorites => favorites.filter(f => f.id !== favorite.id))
  )

export default reducer

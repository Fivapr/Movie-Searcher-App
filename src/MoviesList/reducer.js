import { createAction, createReducer } from 'redux-act'
import { fromJS, List } from 'immutable'

const initialState = fromJS({ movies: [], favorites: [] })

export const fetchMovies = createAction('movies/fetch')
export const setMovies = createAction('movies/set')

export const fetchFavorites = createAction('movies/fetchFavorite')
export const toggleFavorite = createAction('movies/toggleFavorite')

const reducer = createReducer({}, initialState)
  .on(setMovies, (state, movies) => state.set('movies', fromJS(movies)))

  .on(toggleFavorite, (state, favorite) =>
    state.update('favorites', List(), favorites => {
      const favoriteMap = fromJS(favorite)
      const id = favoriteMap.get('id')

      return favorites.includes(favoriteMap)
        ? favorites.filterNot(f => f.get('id') === id)
        : favorites.push(favoriteMap)
    })
  )
  
export default reducer

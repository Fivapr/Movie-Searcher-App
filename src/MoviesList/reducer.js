import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS({ movies: [], favorites: [] })

export const fetchMovies = createAction('movies/fetch')
export const setMovies = createAction('movies/set')

export const toggleFavorite = createAction('movies/toggleFavorite')
export const addFavorite = createAction('movies/addFavorite')
export const fetchFavorites = createAction('movies/fetchFavorite')
export const setFavorites = createAction('movies/toggleFavorite')

const reducer = createReducer({}, initialState)
  .on(setMovies, (state, movies) => state.set('movies', fromJS(movies)))

  .on(setFavorites, (state, favorites) => state.set('favorites', fromJS(favorites)))

  .on(
    toggleFavorite,
    (state, favorite) => state
    // state.update('favorites', List(), favorites => {
    //   const favoriteMap = fromJS(favorite)
    //   const id = favoriteMap.get('id')

    //   return favorites.includes(favoriteMap)
    //     ? favorites.filterNot(f => f.get('id') === id)
    //     : favorites.push(favoriteMap)
    // })
  )

export default reducer

import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS([])

export const toggleFavorite = createAction('movies/toggleFavorite')
export const toggleFavoriteFailure = createAction('movies/toggleFavoriteFailure')
export const fetchFavorites = createAction('movies/fetchFavorite')
export const setFavorites = createAction('movies/toggleFavorite')

const reducer = createReducer({}, initialState)
  .on(setFavorites, (state, favorites) => fromJS(favorites))

  .on(toggleFavorite, (state, favorite) =>
    state.includes(favorite)
      ? state.filterNot(f => f.get('id') === favorite.get('id'))
      : state.push(favorite.set('like', true))
  )

  //just the same as toggleFavorite but triggers when actual database request throws an error
  //aka optimistic UI implementation (this action don't have its place in saga middleware)
  .on(toggleFavoriteFailure, (state, favorite) =>
    state.includes(favorite)
      ? state.filterNot(f => f.get('id') === favorite.get('id'))
      : state.push(favorite.set('like', true))
  )

export default reducer

import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS([])

export const toggleFavorite = createAction('movies/toggleFavorite')
export const fetchFavorites = createAction('movies/fetchFavorite')
export const setFavorites = createAction('movies/toggleFavorite')

const reducer = createReducer({}, initialState)
  .on(setFavorites, (state, favorites) => fromJS(favorites))
  .on(toggleFavorite, (state, favorite) => {
    console.log('​state.includes(favorite)', state.includes(favorite))
    return state.includes(favorite)
      ? state.filterNot(f => f.get('id') === favorite.get('id'))
      : state.push(favorite.set('like', true))
  })

export default reducer

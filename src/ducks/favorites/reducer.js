import { createAction, createReducer } from 'redux-act'
import { fromJS } from 'immutable'

const initialState = fromJS([])

export const toggleFavorite = createAction('movies/toggleFavorite')
export const fetchFavorites = createAction('movies/fetchFavorite')
export const setFavorites = createAction('movies/toggleFavorite')

//prettier-ignore
const reducer = createReducer({}, initialState)
  .on(setFavorites, (state, favorites) =>  fromJS(favorites))

export default reducer
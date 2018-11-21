import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router'
import auth from './ducks/auth/reducer'
import movies from './ducks/movies/reducer'
import favorites from './ducks/favorites/reducer'

//prettier-ignore
const rootReducer = history => 
  combineReducers({ router: connectRouter(history), auth, movies, favorites })

export default rootReducer

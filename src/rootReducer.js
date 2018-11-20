import { combineReducers } from 'redux-immutable'
import moviesReducer from './MoviesList/reducer'
import auth from './auth/reducer'
import { connectRouter } from 'connected-react-router'

//prettier-ignore
const rootReducer = history => 
  combineReducers({ router: connectRouter(history), moviesReducer, auth })

export default rootReducer

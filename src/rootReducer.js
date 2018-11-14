import { combineReducers } from 'redux-immutable'
import moviesReducer from './MoviesList/reducer'
import { connectRouter } from 'connected-react-router'

//prettier-ignore
const rootReducer = history => 
  combineReducers({ router: connectRouter(history), moviesReducer })

export default rootReducer

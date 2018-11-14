import { combineReducers } from 'redux-immutable'
import movies from './MoviesList/reducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({ router: connectRouter(history), movies })

export default rootReducer

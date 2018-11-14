import { combineReducers } from 'redux-immutable'
import home from './Home/reducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({ router: connectRouter(history), home })

export default rootReducer

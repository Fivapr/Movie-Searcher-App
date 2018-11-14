import { fromJS } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router/immutable'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const initialState = fromJS({})

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store

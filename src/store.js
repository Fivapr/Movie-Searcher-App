import { fromJS } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router/immutable'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const initialState = fromJS({})
const rootReducer = createRootReducer(history)

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware), autoRehydrate())
)
persistStore(store)

sagaMiddleware.run(rootSaga)

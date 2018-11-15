import { fromJS } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router/immutable'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { saveState, loadState } from './localStorage'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const initialState = fromJS({})
const persistedState = fromJS(loadState())

const store = createStore(
  createRootReducer(history),
  persistedState || initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

store.subscribe(() => {
  saveState(store.getState())
})
sagaMiddleware.run(rootSaga)

export default store

import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./RootSaga";
import { rootReducer } from "./RootReducer";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

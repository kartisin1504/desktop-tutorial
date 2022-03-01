import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import { createRootReducer, sagas } from "./store/index";

export const history = createBrowserHistory();

// Middleware/Enhancers
const logger = createLogger();
const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers =
  (process.env["NODE_ENV"] === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middleWare = [thunk, sagaMiddleWare, logger, routerMiddleware(history)];
const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(sagas);

export default store;

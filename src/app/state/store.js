import { createStore, compose } from "redux";
import globalReducers from "./reducers";
import globalMiddleware from "./middlewares";

import { loadState } from "./localStorage";
import subscribeDataPersistor from "./persistedState";

const persistedState = loadState("users");

const enchancements = compose(
  globalMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (noop) => noop
);

const store = createStore(globalReducers, persistedState, enchancements);

export default store;

subscribeDataPersistor(store);

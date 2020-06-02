import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { initSaga } from "./sagas";
import sampleReducer from "./sampleReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  sample: sampleReducer.reducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
window.store = store;
sagaMiddleware.run(initSaga);

export default store;

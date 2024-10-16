import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducer/root_reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga/root_sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
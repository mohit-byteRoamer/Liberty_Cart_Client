import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducer/root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga/root-sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

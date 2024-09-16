import rootReducers from "./reducer/root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga/root-sagas";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: rootReducers,
   middleware: (get) => get().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

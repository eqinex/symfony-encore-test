import createSagaMiddleware from "redux-saga";
import rootSaga from "@/shared/sagas";

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/features/Counter";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;

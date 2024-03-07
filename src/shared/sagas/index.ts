import { all } from "redux-saga/effects";
import sagaCounter from "./sagaCounter";

function* rootSaga() {
    yield all([
        sagaCounter(),
    ]);
}

export default rootSaga;

import { takeEvery } from "redux-saga/effects";
import { counterActions } from "@/features/Counter";

function* workIncrement() {
    console.log('test-increment-saga');
}

function* sagaCounter() {
    yield takeEvery(counterActions.increment.type, workIncrement);
}

export default sagaCounter;

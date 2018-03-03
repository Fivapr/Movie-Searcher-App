import { all, call } from "redux-saga/effects";
import { watchFetches } from "./Saga";

export default function* rootSaga() {
  yield all([call(watchFetches)]);
}

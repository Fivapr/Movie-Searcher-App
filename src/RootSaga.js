import { all, call } from "redux-saga/effects";
import { saga, watchFetches } from "./Saga";

export default function* rootSaga() {
  yield all([call(watchFetches)]);
}

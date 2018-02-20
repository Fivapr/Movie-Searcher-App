import { all, call } from "redux-saga/effects";
import { saga } from "./Saga";

export default function* rootSaga() {
  yield all([call(saga)]);
}

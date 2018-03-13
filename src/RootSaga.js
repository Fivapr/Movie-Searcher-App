import { all, call } from "redux-saga/effects";
import { home } from "./Home/Saga";
import { movies } from "./Movies/Saga";
import { movie } from "./Movie/Saga";
import { filters } from "./Filters/Saga";

export default function* rootSaga() {
  yield all([call(home), call(movies), call(movie), call(filters)]);
}

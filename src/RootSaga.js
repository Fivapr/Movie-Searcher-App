import { all, call } from "redux-saga/effects";
import { home } from "./Home/Saga";
import { movies } from "./Movies/Saga";
import { movie } from "./Movie/Saga";
import { filters } from "./Filters/Saga";
import { favorite } from "./Favorite/Saga";
import { auth } from "./Auth/Saga";

export default function* rootSaga() {
  yield all([
    call(home),
    call(movies),
    call(movie),
    call(filters),
    call(favorite),
    call(auth)
  ]);
}

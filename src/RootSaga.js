import { all, call } from "redux-saga/effects";
import { home } from "./Home/Saga";
import { movies } from "./Movies/Saga";
import { movie } from "./Movie/Saga";
import { filters } from "./Filters/Saga";
import { favorites } from "./Favorites/Saga";
import { auth } from "./Auth/Saga";

export default function* rootSaga() {
  yield all([
    call(home),
    call(movies),
    call(movie),
    call(filters),
    call(favorites),
    call(auth)
  ]);
}

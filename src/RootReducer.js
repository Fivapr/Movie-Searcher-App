import { combineReducers } from "redux";
import { moviesReducer } from "./Movies/Reducer";
import { movieReducer } from "./Movie/Reducer";
import { filtersReducer } from "./Filters/Reducer";

export const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  movieReducer: movieReducer,
  filtersReducer: filtersReducer
});

import { combineReducers } from "redux";
import { reducer } from "./Reducer";

export const rootReducer = combineReducers({
  reducer: reducer
});

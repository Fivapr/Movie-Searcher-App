import * as types from "./ActionTypes.js";

const initialState = {
  requestToken: "",
  sessionId: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUEST_TOKEN:
      return {
        ...state,
        requestToken: action.value
      };
    case types.GET_SESSION_ID:
      return {
        ...state,
        sessionId: action.value
      };
    default:
      return state;
  }
};

import * as types from "./ActionTypes.js";

const initialState = {
  sessionId: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SESSION_ID:
      return {
        ...state,
        sessionId: action.value
      };
    default:
      return state;
  }
};

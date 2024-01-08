import { LOGIN_ACTION } from "../Actions/LoginAction";
import { LOGOUT_ACTION } from "../Actions/LoginAction";

const initialsState = {
  credentials: [],
};

export const LoginReducer = (state = initialsState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      // console.log("This is Reducer : ", action.payload);
      return {
        ...state,
        credentials: state.credentials.concat(action.payload),
      };
    }
    case LOGOUT_ACTION:
      return {
        ...state,
        credentials: [],
      };
    default:
      return state;
  }
};

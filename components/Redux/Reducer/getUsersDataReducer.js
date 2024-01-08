import {
  GET_USERS_DATA_LOADING,
  GET_USERS_DATA_FAILURE,
  GET_USERS_DATA_SUCCESS,
} from "../Actions/getUsersDataAction";

const initialState = {
  usersData: [],
  isLoading: false,
  error: "",
};

export const getUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        usersData: [],
        error: "",
      };
    case GET_USERS_DATA_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
        error: "",
        isLoading: false,
      };
    case GET_USERS_DATA_FAILURE:
      return {
        ...state,
        usersData: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

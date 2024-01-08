import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { LoginReducer } from "./Reducer/LoginReducer";
import { getUserDataReducer } from "./Reducer/getUsersDataReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
  Users: getUserDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

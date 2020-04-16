import { combineReducers } from "redux";
import { default as usersReducer } from "./data/users";

const globalReducers = combineReducers({
  users: usersReducer,
});

export default globalReducers;

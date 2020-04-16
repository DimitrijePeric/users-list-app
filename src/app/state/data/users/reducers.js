import types from "./types";
import _reduceUsers from "./reducers/_reduceUsers";
import _reduceUsersFail from "./reducers/_reduceUsersFail";
import _reduceUser from "./reducers/_reduceUser";

const usersReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type === types._REDUCE_USERS) {
    return _reduceUsers(state, action);
  }

  if (action.type === types._REDUCE_USER) {
    return _reduceUser(state, action);
  }

  if (action.type === types._FETCH_ALL_USERS_FAIL) {
    return _reduceUsersFail(state, action);
  }

  return state;
};

export default usersReducer;

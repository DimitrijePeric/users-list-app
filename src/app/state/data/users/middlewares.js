import types from "./types";
import fetchAllUsers from "./middlewares/fetchAllUsers";
import fetchUserById from "./middlewares/fetchUserById";

export default (store) => {
  return (next) => {
    return async (action) => {
      next(action);
      switch (action.type) {
        case types.FETCH_ALL_USERS:
          return fetchAllUsers(store, action);

        case types.FETCH_USER_BY_ID:
          return fetchUserById(store, action);

        default:
          return;
      }
    };
  };
};

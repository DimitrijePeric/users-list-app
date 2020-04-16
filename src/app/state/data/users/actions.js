import types from "./types";

const _reduceUsers = (users) => {
  return {
    type: types._REDUCE_USERS,
    users,
  };
};

const _reduceUser = (user) => {
  return {
    type: types._REDUCE_USER,
    user,
  };
};

const fetchAllUsers = () => {
  return {
    type: types.FETCH_ALL_USERS,
  };
};

const _reduceUsersFail = (error) => {
  return {
    type: types._FETCH_ALL_USERS_FAIL,
    error,
  };
};

const fetchUserById = (id) => {
  return {
    type: types.FETCH_USER_BY_ID,
    id,
  };
};

export default {
  _reduceUsers,
  _reduceUser,
  fetchAllUsers,
  _reduceUsersFail,
  fetchUserById,
};

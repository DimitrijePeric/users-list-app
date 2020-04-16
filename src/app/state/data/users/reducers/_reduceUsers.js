import { uniqBy } from "lodash";

export default (state, action) => {
  const stateUserData = typeof state.data !== "undefined" ? state.data : [];
  const newUserData = [...stateUserData, ...action.users];

  const uniqueUserData = uniqBy(newUserData, (user) => {
    return user.id;
  });

  return Object.assign({}, state, {
    data: [...uniqueUserData],
  });
};

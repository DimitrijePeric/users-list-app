export default (state, action) => {
  let stateUserData = typeof state.data !== "undefined" ? state.data : [];
  return Object.assign({}, state, { data: [...stateUserData, action.user] });
};

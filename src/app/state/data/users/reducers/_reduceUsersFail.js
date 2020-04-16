export default (state, action) => {
  return Object.assign({}, state, { error: action.error });
};

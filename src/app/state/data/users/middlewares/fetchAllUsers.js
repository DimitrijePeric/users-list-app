import api from "configuration/api";
import usersActions from "../actions";

export default (store, action) => {
  // api call made with axios to fetch all users
  api
    .get("users")
    .then((res) => {
      store.dispatch(usersActions._reduceUsers(res.data));
    })
    .catch((error) => {
      store.dispatch(usersActions._reduceUsersFail(error.message));
    });
};

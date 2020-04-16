import api from "configuration/api";
import usersActions from "../actions";

export default (store, action) => {
  // api call made with axios to fetch user by id
  api
    .get(`users/${action.id}`)
    .then((res) => {
      store.dispatch(usersActions._reduceUser(res.data));
    })
    .catch((error) => {
      store.dispatch(usersActions._reduceUsersFail(error.message));
    });
};

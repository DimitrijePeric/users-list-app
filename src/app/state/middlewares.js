import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersMiddleware from "./data/users/middlewares";

const globalMiddleware = compose(applyMiddleware(thunk, usersMiddleware));

export default globalMiddleware;

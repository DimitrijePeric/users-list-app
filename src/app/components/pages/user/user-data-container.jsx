import React from "react";
import User from "./user";
import { retrieveUserIdFromUrl } from "./functions";

const UserDataContainer = ({ location, users, fetchUserById }) => {
  let { data } = users;
  let userId = retrieveUserIdFromUrl(location.pathname);

  if (typeof data === "undefined" && userId) {
    fetchUserById(userId);
    return <>retrieving user information...</>;
  }

  let currentUser = data.find((user) => {
    return user.id === userId;
  });

  if (
    typeof currentUser === "undefined" ||
    typeof currentUser.id === "undefined"
  )
    return <>User does not exist</>;
  return <User currentUser={currentUser} />;
};

export default UserDataContainer;

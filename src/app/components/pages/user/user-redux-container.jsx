import React from "react";
import { connect } from "react-redux";
import usersActions from "app/state/data/users/actions";
import UserDataContainer from "./user-data-container";

const UserReduxContainer = (props) => {
  return <UserDataContainer {...props} />;
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserById: (id) => {
      dispatch(usersActions.fetchUserById(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReduxContainer);

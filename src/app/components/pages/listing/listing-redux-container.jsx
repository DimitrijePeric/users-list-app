import React from "react";
import { connect } from "react-redux";
import usersActions from "app/state/data/users/actions";
import Listing from "./listing";

const ListingReduxContainer = (props) => {
  return <Listing {...props} />;
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => {
      dispatch(usersActions.fetchAllUsers());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingReduxContainer);

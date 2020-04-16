import React, { memo } from "react";
import { isEqual } from "lodash";
import { ListGroup, ListGroupItem } from "reactstrap";

const User = memo(
  ({ currentUser }) => {
    console.log(currentUser.address);
    return (
      <div className={"wrapper"}>
        <ListGroup
          key={`user-listing-item-${currentUser.id}`}
          className={"list-group"}
        >
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Name:</h4>
            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.name}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Username:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.username}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Email:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.email}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Phone:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.phone}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Website:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.website}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Street:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.address.street}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Suite:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.address.suite}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>City:</h4>

            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.address.city}
            </ListGroupItem>
          </div>
          <div className={"inner-wrapper"}>
            <h4 className={"col-md-3"}>Zipcode:</h4>
            <ListGroupItem className={"col-md-4 col-sm-12"}>
              {currentUser.address.zipcode}
            </ListGroupItem>
          </div>
        </ListGroup>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (isEqual(prevProps, nextProps)) {
      return true;
    }

    return false;
  }
);

export default User;

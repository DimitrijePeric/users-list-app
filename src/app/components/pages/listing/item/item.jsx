import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { isEqual } from "lodash";

const Item = memo(
  ({ user }) => {
    return (
      <div className={"list-wrapper"}>
        <ListGroup
          horizontal
          key={`user-listing-item-${user.id}`}
          className={"list-group"}
        >
          <ListGroupItem className={"col-md-4 col-sm-12"}>
            {user.name}
          </ListGroupItem>
          <ListGroupItem className={"col-md-2 col-sm-12"}>
            {user.username}
          </ListGroupItem>
          <ListGroupItem className={"col-md-4 col-sm-12"}>
            {user.email}
          </ListGroupItem>

          <Link
            className={"button col-md-2 col-sm-12 list-group-item active"}
            active
            to={{ pathname: `/user/${user.id}`, user: user }}
          >
            <span>Details</span>
          </Link>
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

export default Item;

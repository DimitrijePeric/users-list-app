import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";

const Item = ({ link }) => {
  return (
    <NavItem key={`navigation-link-${link.text}`}>
      <NavLink to={link.url} activeClassName="active" exact={link.exact}>
        {link.text}
      </NavLink>
    </NavItem>
  );
};

export default Item;

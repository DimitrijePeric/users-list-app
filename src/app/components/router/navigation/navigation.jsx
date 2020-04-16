import React, { useState } from "react";
import Item from "./item";
import { Navbar, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import theme from "configuration/theme";
import links from "configuration/routes";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar id={`main-navigation`} color="faded" light fixed={true}>
      <NavLink to="/" className="mr-auto navbar-brand">
        {theme.brand_name}
      </NavLink>
      {links.length > 0 &&
        links.map((link) => {
          return (
            <Nav pills>
              {link.in_navigation === true && <Item link={link} />}
            </Nav>
          );
        })}
    </Navbar>
  );
};

export default Navigation;

import React, { useEffect, useState, memo } from "react";
import loaderImage from "app/assets/images/logo.jpg";
import { isEqual } from "lodash";
import Item from "./item";

const Listing = memo(
  ({ users, fetchAllUsers }) => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
      fetchAllUsers();
    }, [fetchAllUsers]);

    setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return (
      <div id={`listing-container`}>
        {showLoader ? (
          <img className={"glow-border"} src={loaderImage} />
        ) : typeof users !== "undefined" &&
          typeof users.data !== "undefined" ? (
          users.data.map((user, index) => {
            return <Item key={`user-listing-item-${user.id}`} user={user} />;
          })
        ) : (
          <>loading users...</>
        )}
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

export default Listing;

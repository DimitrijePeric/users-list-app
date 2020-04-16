import Listing from "app/components/pages/listing";
import User from "app/components/pages/user";

export default [
  {
    url: "/",
    component: Listing,
    exact: true,
    text: "Users",
    in_navigation: true,
  },
  { url: "/user", component: User, exact: false, in_navigation: false },
];

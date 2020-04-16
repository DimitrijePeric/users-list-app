import React from "react";
import { Switch, Route } from "react-router-dom";
import { default as Routes } from "configuration/routes";

const Router = () => {
  return (
    <div id={`content`}>
      <Switch>
        {Routes.map((route) => {
          return (
            <Route
              key={`router-route-${route.url}`}
              path={route.url}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Router;

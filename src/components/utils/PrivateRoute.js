import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component, token, path }) => {
  return token ? (
    <Route path={path} exact component={component} />
  ) : (
    <Redirect to="/" />
  );
};

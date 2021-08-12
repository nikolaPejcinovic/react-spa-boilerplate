import React from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector(
    ({ authentication }) => authentication
  );

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default withRouter(PrivateRoute);

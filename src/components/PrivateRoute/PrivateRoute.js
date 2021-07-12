import React from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
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

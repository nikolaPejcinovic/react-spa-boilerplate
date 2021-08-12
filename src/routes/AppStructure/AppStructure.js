import React from "react";

// Components
import { Switch, Route } from "react-router-dom";

// Path
import PrivateRoute from "components/PrivateRoute";

const Home = React.lazy(() => import("../Home"));
const Login = React.lazy(() => import("../Login"));

const AppStructure = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/error" component={() => <div>Error page</div>} />
    <Route exact path="/oidc" component={() => <div>OKTA pending...</div>} />
    <Route exact path="*" component={() => <div>Not found</div>} />
  </Switch>
);

export default AppStructure;

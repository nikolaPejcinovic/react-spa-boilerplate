import React from "react";

// Components
import { Switch, Route } from "react-router-dom";

// Path
import PrivateRoute from "components/PrivateRoute";

const Home = React.lazy(() => import("../Home"));

const AppStructure = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/login" component={() => <div>Login</div>} />
    <Route exact path="*" component={() => <div>Not found</div>} />
  </Switch>
);

export default AppStructure;

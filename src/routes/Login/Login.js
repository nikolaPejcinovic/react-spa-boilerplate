import React from "react";

// Components
import { Redirect } from "react-router";

// Hooks
import { useHandleLoginWithRedirect } from "hooks";

function Login() {
  const { handleLogin, loading, error } = useHandleLoginWithRedirect();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Redirect to="/error" />;
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;

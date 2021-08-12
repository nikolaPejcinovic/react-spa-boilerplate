import React, { Suspense, useEffect } from "react";

// Utils
import { useDispatch, useSelector } from "react-redux";

// Hooks
import { useHandleRedirect } from "hooks";
import { useAuthenticationFromLocalStorage } from "hooks/useAuthenticationFromLocalStorage";

// Components
import { BrowserRouter as Router } from "react-router-dom";

// Actions
import { getUserData } from "redux/reducers/authenticationReducer";

// Routes
const AppStructure = React.lazy(() => import("./routes/AppStructure"));

function App() {
  const dispatch = useDispatch();

  useHandleRedirect();
  useAuthenticationFromLocalStorage();

  const { isAuthenticated } = useSelector(
    ({ authentication }) => authentication
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserData());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppStructure />
      </Suspense>
    </Router>
  );
}

export default App;

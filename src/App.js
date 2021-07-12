import React, { Suspense } from "react";

// Components
import { BrowserRouter as Router } from "react-router-dom";

// Routes
const AppStructure = React.lazy(() => import("./routes/AppStructure"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppStructure />
      </Suspense>
    </Router>
  );
}

export default App;

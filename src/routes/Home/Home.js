// Hooks
import { useHandleLogoutWithRedirect } from "hooks/api/useHandleLogoutWithRedirect";

// Components
import { Redirect } from "react-router";

function Home() {
  const { handleLogout, loading, error } = useHandleLogoutWithRedirect();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Redirect to="/error" />;
  }

  return (
    <div>
      Home
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;

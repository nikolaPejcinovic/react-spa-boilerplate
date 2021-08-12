import { useState } from "react";

// Service
import { logout } from "service";

export function useHandleLogoutWithRedirect() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleLogout() {
    setLoading(true);

    try {
      const { redirect: redirectUrl } = await logout();

      localStorage.clear();
      window.open(redirectUrl, "_parent");
    } catch (e) {
      setError(e);
    }
  }

  return {
    handleLogout,
    loading,
    error
  };
}

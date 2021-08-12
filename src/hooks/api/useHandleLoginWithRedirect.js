import { useState } from "react";

// Service
import { getAuthRedirectUrl } from "service";

// Utils
import { setValue } from "utils";

export function useHandleLoginWithRedirect() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleLogin() {
    setLoading(true);

    try {
      const {
        redirect: redirectUrl,
        nonce,
        realm,
        state
      } = await getAuthRedirectUrl();

      setValue("nonce", nonce);
      setValue("realm", realm);
      setValue("state", state);

      window.open(redirectUrl, "_parent");
    } catch (e) {
      setError(e);
    }
  }

  return {
    handleLogin,
    loading,
    error
  };
}

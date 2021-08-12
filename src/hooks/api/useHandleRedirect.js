import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions
import { authentication } from "redux/reducers/authenticationReducer";

// Utils
import { getValue } from "utils";

export function useHandleRedirect() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.href.includes("code")) {
      const redirectUri = window.location.href;

      const nonce = getValue("nonce");
      const state = getValue("state");
      const realm = getValue("realm");

      const token = getValue("access_token");

      if (token || !nonce || !state || !realm) {
        window.location.href = "/";
      }

      (async () => {
        try {
          await dispatch(authentication({ redirectUri, nonce, state, realm }));
          window.location.href = "/";
        } catch (e) {
          // Error already handled in authentication reducer
          console.log("Authentication error");
        }
      })();
    }
  }, [dispatch]);
}

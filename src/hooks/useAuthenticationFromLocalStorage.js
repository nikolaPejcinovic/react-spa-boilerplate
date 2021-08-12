// Utils
import { useDispatch } from "react-redux";
import { getValue } from "utils";

// Actions
import { setAuthentication } from "redux/reducers/authenticationReducer";

export function useAuthenticationFromLocalStorage() {
  const dispatch = useDispatch();
  const token = getValue("access_token");

  if (token) {
    return dispatch(setAuthentication(true));
  }

  dispatch(setAuthentication(false));
}

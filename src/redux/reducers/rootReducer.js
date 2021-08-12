// Utils
import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import { authenticationReducer } from "./authenticationReducer";

export const rootReducer = combineReducers({
  authentication: authenticationReducer
});

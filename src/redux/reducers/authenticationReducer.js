// Utils
import {
  createReducer,
  createAsyncThunk,
  createAction,
  isAnyOf
} from "@reduxjs/toolkit";
import { setValue } from "utils";

// Services
import { getAuthData, getUserData as fetchUserData } from "service";

// Actions
import {
  AUTHENTICATION,
  GET_USER_DATA,
  SET_AUTHENTICATION
} from "constants/index";

const initialState = {
  isAuthenticated: false,
  email: null,
  fullName: null,
  role: null,
  error: null,
  loading: false
};

export const authentication = createAsyncThunk(
  AUTHENTICATION,
  async ({ redirectUri, nonce, state, realm }, { rejectWithValue }) => {
    try {
      return await getAuthData(redirectUri, nonce, state, realm);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  GET_USER_DATA,
  async (_, { rejectWithValue }) => {
    try {
      return await fetchUserData();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const setAuthentication = createAction(SET_AUTHENTICATION);

export const authenticationReducer = createReducer(initialState, builder =>
  builder
    .addCase(authentication.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getUserData.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(setAuthentication, (state, action) => {
      state.isAuthenticated = action.payload;
    })
    .addCase(getUserData.fulfilled, (state, action) => {
      const { email, full_name, roles } = action.payload || {};

      state.email = email;
      state.fullName = full_name;
      state.role = roles[0];
      state.loading = false;
    })
    .addCase(authentication.fulfilled, (state, action) => {
      const { access_token, expires_in, refresh_token, username } =
        action.payload || {};

      setValue("access_token", access_token);
      setValue("expires_in", expires_in);
      setValue("refresh_token", refresh_token);
      setValue("username", username);

      state.isAuthenticated = true;
      state.loading = false;
    })
    .addCase(getUserData.rejected, (state, action) => {
      localStorage.clear();

      state.isAuthenticated = false;
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(authentication.rejected, (state, action) => {
      localStorage.clear();

      state.isAuthenticated = false;
      state.error = action.payload;
      state.loading = false;
    })
);

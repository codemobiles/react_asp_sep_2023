import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResult, RegisterResult } from "@/types/auth-result.type";
import { httpClient } from "@/utils/HttpClient";
import { User } from "@/types/user.type";
import { server } from "@/utils/constants";

export interface AuthState {
  loginResult?: LoginResult;
  registerResult?: RegisterResult;
  isAuthenticating: boolean;
  isAuthented: boolean;
  isError: boolean;
  count: number;
}

const initialState: AuthState = {
  isAuthenticating: true,
  isAuthented: false,
  isError: false,
  count: 0,
};

export const addWithDelay = createAsyncThunk("addWithDelay", async () => {
  // get result from server (delay 1 secs)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // return store.getState().authReducer.count + 1;
  const store = () => import("@/store/store");
  return (await store()).default.getState().authReducer.count + 1;
});

export const removeWithDelay = createAsyncThunk("removeWithDelay", async () => {
  // get result from server (delay 1 secs)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const store = () => import("@/store/store");
  return (await store()).default.getState().authReducer.count - 1;
});

export const login = createAsyncThunk("auth/login", async (value: User) => {
  const result = await httpClient.post<LoginResult>(server.LOGIN_URL, value);
  if (result.data.token) {
    const { token } = result.data;
    localStorage.setItem(server.TOKEN_KEY, token);
    return result.data;
  }
  throw Error();
});

export const register = createAsyncThunk(
  "auth/register",
  async (value: User) => {
    const result = await httpClient.post<RegisterResult>(
      server.REGISTER_URL,
      value
    );
    if (result.data.result === "ok") {
      return result.data;
    }

    throw Error();
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    add: (state) => {
      state.count++;
    },
    remove: (state) => {
      state.count--;
    },
    logout: (state) => {
      state.isAuthented = false;
      localStorage.clear();
    },
    relogin: (state) => {
      const _token = localStorage.getItem(server.TOKEN_KEY);
      if (_token) {
        state.loginResult = {
          token: _token,
          result: "ok",
        };
        state.isAuthented = true;
      }
      state.isAuthenticating = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addWithDelay.fulfilled, (state, action) => {
      state.count = action.payload;
    });

    builder.addCase(removeWithDelay.fulfilled, (state, action) => {
      state.count = action.payload;
    });

    // login successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthented = true;
      state.isError = false;
      state.loginResult = action.payload;
      state.isAuthenticating = false;
    });

    // login failed
    builder.addCase(login.rejected, (state) => {
      state.isAuthented = false;
      state.isError = true;
      state.isAuthenticating = false;
    });
  },
});

export default authSlice.reducer;
export const { add, remove, logout, relogin } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  error: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload;
    },
    loginFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    register: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload;
    },
    registerFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

//export the action
export const {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
} = authSlice.actions;

//reducer
export default authSlice.reducer;

//export
export const authSelector = (state) => state.auth;

//thunk

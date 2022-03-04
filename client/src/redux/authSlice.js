import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

    logout: (state) => {
      state.loading = false;
      state.error = "";
      state.token = null;
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
  logout,
} = authSlice.actions;

//reducer
export default authSlice.reducer;

//export
export const authSelector = (state) => state.auth;

//thunk
export function registerUser(userdata) {
  return async (dispatch) => {
    dispatch(register());

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/register",
        userdata
      );

      dispatch(registerSuccess(data));

      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch(registerFailure(error.response.data));
    }
  };
}

export function loginUser(userdata) {
  return async (dispatch) => {
    dispatch(login());

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/login",
        userdata
      );

      dispatch(loginSuccess(data));

      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch(login(error.response.data));
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
}

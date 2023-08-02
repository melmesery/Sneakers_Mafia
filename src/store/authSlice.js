import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { URL } from "../API.js";

const initialState = {
  token: localStorage.getItem("token"),
  userName: "",
  email: "",
  _id: "",
  role: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}/auth/signup`, {
        userName: values.userName,
        email: values.email,
        password: values.password,
        cPassword: values.cPassword,
        key: values.key,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}/auth/login`, {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          role: user.role,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    logoutUser(state) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        role: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        return { ...state, registerStatus: "pending" };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload) {
          const { token } = action.payload;
          const user = jwtDecode(token);
          return {
            ...state,
            token,
            userName: user.userName,
            email: user.email,
            _id: user._id,
            role: user.role,
            registerStatus: "success",
          };
        } else return state;
      })
      .addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload.message,
        };
      });

    builder
      .addCase(loginUser.pending, (state) => {
        return { ...state, loginStatus: "pending" };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload) {
          const { token } = action.payload;
          const user = jwtDecode(token);
          return {
            ...state,
            token,
            userName: user.userName,
            email: user.email,
            _id: user._id,
            role: user.role,
            loginStatus: "success",
          };
        } else return state;
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          loginStatus: "rejected",
          loginError: action.payload.message,
        };
      });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

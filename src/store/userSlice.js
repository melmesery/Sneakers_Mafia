import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HEADER, HEADERS, URL } from "../API.js";

const initialState = {
  list: [],
  status: null,
  error: null,
};

export const usersFetch = createAsyncThunk(
  "users/usersFetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/user`);
      return data.users;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const usersBlock = createAsyncThunk(
  "users/usersBlock",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `${URL}/user/${id}`,
        {},
        {
          headers: HEADERS,
        }
      );
      return data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userFetch = createAsyncThunk(
  "users/userFetch",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/user/${id}`, {
        headers: HEADERS,
      });
      return data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(usersFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(usersFetch.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(usersFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(usersBlock.pending, (state) => {
        state.status = "pending";
      })
      .addCase(usersBlock.fulfilled, (state, action) => {
        const newItems = state.list.map((item) => {
          return item._id === action.payload._id ? action.payload : item;
        });
        state.list = newItems;
        state.status = "success";
      })
      .addCase(usersBlock.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

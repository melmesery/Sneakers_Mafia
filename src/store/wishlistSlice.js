import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HEADERS, URL } from "../API.js";

const initialState = {
  items: [],
  quantity: null,
  status: null,
  error: null,
};

export const wishlistFetch = createAsyncThunk(
  "wishlist/wishlistFetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/wishlist`, {
        headers: HEADERS,
      });
      return data.wishlist.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const wishlistCreate = createAsyncThunk(
  "wishlist/wishlistCreate",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${URL}/wishlist/${id}`,
        {},
        {
          headers: HEADERS,
        }
      );
      return data.wishlist.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const wishlistDelete = createAsyncThunk(
  "wishlist/wishlistDelete",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${URL}/wishlist/${id}`, {
        headers: HEADERS,
      });
      return data.wishlist.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(wishlistFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(wishlistFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.quantity = state.items.length;
        state.status = "success";
      })
      .addCase(wishlistFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(wishlistCreate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(wishlistCreate.fulfilled, (state, action) => {
        state.items = action.payload;
        state.quantity = state.items.length;
        state.status = "success";
      })
      .addCase(wishlistCreate.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(wishlistDelete.pending, (state) => {
        state.status = "pending";
      })
      .addCase(wishlistDelete.fulfilled, (state, action) => {
        state.items = action.payload;
        state.quantity = state.items.length;
        state.status = "success";
      })
      .addCase(wishlistDelete.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;

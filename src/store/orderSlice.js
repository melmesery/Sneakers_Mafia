import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../API.js";

const initialState = {
  list: [],
  status: null,
  error: null,
};

export const ordersFetch = createAsyncThunk(
  "orders/ordersFetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/order/?new=true`);
      return data.orders;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const orderEdit = createAsyncThunk(
  "orders/orderEdit",
  async (args, { rejectWithValue }) => {
    const { id, delivery_status } = args;
    try {
      const { data } = await axios.patch(`${URL}/order/${id}`, {
        delivery_status,
      });
      return data.order;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(ordersFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(ordersFetch.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(ordersFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(orderEdit.pending, (state) => {
        state.status = "pending";
      })
      .addCase(orderEdit.fulfilled, (state, action) => {
        const newItems = state.list.map((item) => {
          return item._id === action.payload._id ? action.payload : item;
        });
        state.list = newItems;
        state.status = "success";
      })
      .addCase(orderEdit.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;

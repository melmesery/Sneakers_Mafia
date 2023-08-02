import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { HEADER, HEADERS, URL } from "../API.js";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/product`);
      return data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productCreate = createAsyncThunk(
  "products/productCreate",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL}/product`, args, {
        headers: HEADER,
      });
      if (data.message === "Done") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      return data.product;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productDelete = createAsyncThunk(
  "products/productDelete",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${URL}/product/${id}`, {
        headers: HEADERS,
      });
      return data.deletedProduct;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productEdit = createAsyncThunk(
  "products/productEdit",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`${URL}/product/${args.id}`, args, {
        headers: HEADER,
      });
      if (data.message === "Done") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your update has been saved",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: "custom-swal",
          },
        });
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(productCreate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productCreate.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.status = "success";
      })
      .addCase(productCreate.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(productDelete.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productDelete.fulfilled, (state, action) => {
        const newItems = state.items.filter((item) => {
          return item._id !== action.payload._id;
        });
        state.items = newItems;
        state.status = "success";
      })
      .addCase(productDelete.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });

    builder
      .addCase(productEdit.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productEdit.fulfilled, (state, action) => {
        const newItems = state.items.map((item) => {
          return item._id === action.payload._id ? action.payload : item;
        });
        state.items = newItems;
        state.status = "success";
      })
      .addCase(productEdit.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

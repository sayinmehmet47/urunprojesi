import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'products/getProduct',
  async (id) => {
    // Here you can use axios with your own api
    const response = await axios(`http://localhost:3000/products/${id}`);
    return response.data;
  }
);

export const product = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addProduct, reset, removeSelected } = product.actions;

export default product.reducer;

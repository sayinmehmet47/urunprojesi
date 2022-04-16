import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoriesDetails = createAsyncThunk(
  'getProducts',
  async (id) => {
    // Here you can use axios with your own api
    const response = await axios(
      `http://localhost:3000/categories/${id}/products`
    );
    return response.data;
  }
);

export const CategoriesDetails = createSlice({
  name: 'categories',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
    favorites: (state, action) => {
      state.data = state.data.map((product) => {
        if (product.id === action.payload) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoriesDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCategoriesDetails.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { favorites } = CategoriesDetails.actions;

export default CategoriesDetails.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('categories/get', async () => {
  // Here you can use axios with your own api
  const response = await axios('http://localhost:3000/categories');
  return response.data;
});

export const CategoriesSlider = createSlice({
  name: 'categories',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default CategoriesSlider.reducer;

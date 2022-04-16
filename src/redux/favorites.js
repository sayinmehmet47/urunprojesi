import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavorites = createAsyncThunk('getFavorites', async (id) => {
  // Here you can use axios with your own api
  const response = await axios(`http://localhost:3000/favorites`);
  return response.data;
});

export const favorites = createSlice({
  name: 'favorites',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default favorites.reducer;

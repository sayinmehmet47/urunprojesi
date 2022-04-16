import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSliders = createAsyncThunk('sliders/get', async () => {
  // Here you can use axios with your own api
  const response = await axios('http://localhost:3000/sliders');
  return response.data;
});

export const SliderSlice = createSlice({
  name: 'sliders',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSliders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSliders.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSliders.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default SliderSlice.reducer;

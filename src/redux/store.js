import { configureStore } from '@reduxjs/toolkit';
import sliders from './sliders';
import categories from './categories';
import favorites from './favorites';
import categoriesDetails from './categoriesDetails';
import product from './product';
export const store = configureStore({
  reducer: {
    sliders,
    favorites,
    categories,
    categoriesDetails,
    product,
  },
});

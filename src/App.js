import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './App.scss';
import CategoriesDetails from './pages/CategoriesDetails';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<FavoritesPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="products/:id" element={<ProductDetailsPage />} />
        <Route path="categories/:id/products" element={<CategoriesDetails />} />
      </Routes>
    </div>
  );
}

export default App;

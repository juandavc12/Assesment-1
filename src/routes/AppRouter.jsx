import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import { ProductsProvider } from '../context/ProductsContext';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail/:Slug" element={<ProductDetail />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
};

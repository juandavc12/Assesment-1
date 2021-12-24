import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

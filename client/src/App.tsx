import React from 'react';
import './styles/style.css';
import { Home, Countries, Country, Layout } from './pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="country/:countryCode" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

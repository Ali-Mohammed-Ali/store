import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home.js";
import { About } from './pages/About.js';
import { Contact } from './pages/Contact.js';
import { Favorite } from './pages/Favorite.js';
import { Cart } from './pages/Cart.js';
import { Register } from './pages/Register.js';
function App() {
  return (
    
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
          </Routes>
    </BrowserRouter>
    
  );
}

export default App;

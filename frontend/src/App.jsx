import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component

import HomePage from './components//HomePage'; 
import ProductDetail from './components/ProductDetail'; 


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/product/:id" element={<ProductDetail />} />  
      </Routes>
    </Router>
  );
}

export default App;


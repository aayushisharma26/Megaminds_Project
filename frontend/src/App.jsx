import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Signup from './components//Signup.jsx'; 

import HomePage from './components//HomePage'; 
import ProductDetail from './components/ProductDetail'; 


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/product/:id" element={<ProductDetail />} />  
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;


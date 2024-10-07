import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Signup from './components//Signup.jsx'; 

import HomePage from './components//HomePage'; 
import ProductDetail from './components/ProductDetail'; 
import Login from './components/Login.jsx';


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/product/:id" element={<ProductDetail />} />  
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;


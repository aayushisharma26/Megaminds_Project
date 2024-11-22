import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import AddToCart from './components/AddToCart';


function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Router>
            <Navbar onSearch={(term) => setSearchTerm(term)} />
            <Routes>
                <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addcart" element={<AddToCart />} />
            </Routes>
        </Router>
    );
}

export default App;

















import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import SearchResults from './components/SearchResults';  
import SearchDetail from "./components/SearchDetail";
import AddToCart from "./components/AddToCart";  
import Checkout from "./components/Checkout";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchResults />} />  
                <Route path="/search/:id" element={<SearchDetail />} />
                <Route path="/addcart" element={<AddToCart />} />  {/* AddToCart route */}
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;














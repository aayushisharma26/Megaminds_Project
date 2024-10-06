// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from "./components/HomePage";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components//HomePage'; // Import HomePage component
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home Page ka route */}
        <Route path="/product/:id" element={<ProductDetail />} />  {/* Product Detail ka route */}
      </Routes>
    </Router>
  );
}

export default App;


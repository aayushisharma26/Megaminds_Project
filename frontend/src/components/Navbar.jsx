import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        onSearch(searchInput);  
    };

    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center justify-between mx-auto max-w-6xl h-20 px-4">
                <div>
                    <h1 className="text-2xl font-bold">
                        <Link to="/" className="text-[#39b75d]">Megaminds</Link>
                    </h1>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="border border-gray-300 rounded-l-lg py-2 px-4"
                    />
                    <button
                        className="bg-[#39b75d] text-white px-4 py-2 rounded-r-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="hidden md:flex gap-2">
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/addcart">Add Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

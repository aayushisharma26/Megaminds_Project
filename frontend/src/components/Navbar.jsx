// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
    const toggleMenu = () => {
        const menu = document.getElementById("mobileMenu");
        menu.classList.toggle("hidden");
    };

    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center justify-between mx-auto max-w-6xl h-20 px-4">
                {/* Logo Section */}
                <div className="flex-none">
                    <h1 className="text-2xl font-bold">
                        <Link className="text-[#39b75d]" to="/" title="logo">
                            Megaminds
                        </Link>
                    </h1>
                </div>

                {/* Centered Search Input */}
                <div className="flex-1 flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:border-[#39b75d] max-w-md"
                    />
                    <button className="bg-[#39b75d] text-white px-4 py-2 rounded-r-lg hover:bg-[#6EC207] transition duration-300">
                        Search
                    </button>
                </div>

                {/* Log In/Sign Up for large screens */}
                <div className="hidden md:flex items-center gap-2 ml-8">
                    <Link to="/login">
                        <button className="border border-[#39b75d] text-black px-4 py-2 rounded hover:bg-[#39b75d] hover:text-white transition duration-300">Log In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-[#39b75d] text-black px-4 py-2 rounded hover:bg-[#6EC207] hover:text-white transition duration-300">Sign Up</button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-black" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobileMenu" className="md:hidden hidden">
                <ul className="block text-gray-600">
                    <li>
                        <Link to="/login" className="block px-4 py-2 hover:text-[#39b75d]">Log In</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="block px-4 py-2 hover:text-[#39b75d]">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

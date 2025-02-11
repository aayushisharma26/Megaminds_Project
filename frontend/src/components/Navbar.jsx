import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchInput.trim() !== '') {
            navigate(`/search?query=${searchInput}`);
        }
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
                    <Link to="/login" className="bg-[#39b75d] text-white px-4 py-2 rounded-lg">Log In</Link>
                    <Link to="/signup" className="bg-[#39b75d] text-white px-4 py-2 rounded-lg">Sign Up</Link>
                    <Link to="/addcart" className="bg-[#39b75d] text-white px-4 py-2 rounded-lg">Add Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

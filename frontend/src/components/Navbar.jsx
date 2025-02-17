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
        <div className="bg-white shadow-md relative">
            <div className="flex items-center max-w-7xl h-20 px-6 mx-auto">
                
                {/* Left Side - Logo (Exactly at Left End) */}
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold">
                        <Link to="/" className="text-[#39b75d]">Megaminds</Link>
                    </h1>
                </div>

                {/* Center - Search Bar (Perfectly Centered) */}
                <div className="flex flex-1 justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="border border-gray-300 rounded-l-lg py-2 px-4 w-[500px] mr-2"  
                    />
                    <button
                        className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {/* Right Side - Buttons (Exactly at Right End using `ml-auto`) */}
                <div className="flex items-center gap-4 ml-auto">
                    <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Log In</Link>
                    <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Sign Up</Link>
                    {/* <Link to="/addcart" className=" text-white px-6 py-2 rounded-lg">🛒</Link> */}
                    <Link 
    to="/addcart" 
    className="text-3xl px-8 py-4"
>
    🛒
</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (searchInput.trim() !== '') {
//             navigate(`/search?query=${searchInput}`);
//         }
//     };

//     return (
//         <div className="bg-white shadow-md relative">
//             <div className="flex items-center max-w-7xl h-20 px-6 mx-auto">
                
//                 {/* Left Side - Logo (Exactly at Left End) */}
//                 <div className="flex-shrink-0">
//                     <h1 className="text-2xl font-bold">
//                         <Link to="/" className="text-[#39b75d]">Megaminds</Link>
//                     </h1>
//                 </div>

//                 {/* Center - Search Bar (Perfectly Centered) */}
//                 <div className="flex flex-1 justify-center">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchInput}
//                         onChange={(e) => setSearchInput(e.target.value)}
//                         className="border border-gray-300 rounded-l-lg py-2 px-4 w-[500px] mr-2"  
//                     />
//                     <button
//                         className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
//                         onClick={handleSearch}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 {/* Right Side - Buttons (Exactly at Right End using `ml-auto`) */}
//                 <div className="flex items-center gap-4 ml-auto">
//                     <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Log In</Link>
//                     <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Sign Up</Link>
//                     {/* <Link to="/addcart" className=" text-white px-6 py-2 rounded-lg">🛒</Link> */}
//                     <Link 
//     to="/addcart" 
//     className="text-3xl px-8 py-4"
// >
//     🛒
// </Link>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;






// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (searchInput.trim() !== '') {
//             navigate(`/search?query=${searchInput}`);
//         }
//     };

//     return (
//         <div className="bg-white shadow-md relative">
//             <div className="flex items-center max-w-7xl h-20 px-6 mx-auto justify-between">
                
//                 {/* Left Side - Logo (Exactly at Left Corner) */}
//                 <div className="flex-shrink-0">
//                     <h1 className="text-2xl font-bold">
//                         <Link to="/" className="text-[#39b75d]">Megaminds</Link>
//                     </h1>
//                 </div>
              
//                 {/* Center - Search Bar (Perfectly Centered) */}
//                 <div className="flex flex-1 justify-center">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchInput}
//                         onChange={(e) => setSearchInput(e.target.value)}
//                         className="border border-gray-300 rounded-l-lg py-2 px-4 w-[500px] mr-2"  
//                     />
//                     <button
//                         className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
//                         onClick={handleSearch}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 {/* Right Side - Buttons (Exactly at Right End using `ml-auto`) */}
//                 <div className="flex items-center gap-4 ml-auto">
//                     <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Log In</Link>
//                     <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Sign Up</Link>
//                     <Link 
//                         to="/addcart" 
//                         className="text-3xl px-8 py-4"
//                     >
//                         🛒
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi"; // Icons for Menu Toggle

// const Navbar = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (searchInput.trim() !== '') {
//             navigate(`/search?query=${searchInput}`);
//         }
//     };

//     return (
//         <div className="bg-white shadow-md w-full">
//             <div className="flex items-center justify-between h-20 px-4 md:px-8 w-full">
                
//                 {/* Left Side - Logo (Bilkul Left End) */}
//                 <div className="flex-shrink-0">
//                     <h1 className="text-2xl font-bold">
//                         <Link to="/" className="text-[#39b75d]">Megaminds</Link>
//                     </h1>
//                 </div>

//                 {/* Center - Search Bar (Responsive Width Badhaya) */}
//                 <div className="flex-grow md:flex justify-center hidden">
//                     <div className="flex w-[700px] max-w-full">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchInput}
//                             onChange={(e) => setSearchInput(e.target.value)}
//                             className="border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:outline-none text-lg"  
//                         />
//                         <button
//                             className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
//                             onClick={handleSearch}
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Side - Buttons (Mobile & Desktop) */}
//                 <div className="hidden md:flex items-center gap-4">
//                     <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Log In</Link>
//                     <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Sign Up</Link>
//                     <Link to="/addcart" className="text-3xl px-2"> 🛒 </Link>
//                 </div>

//                 {/* Mobile Menu Button (Hamburger) */}
//                 <div className="md:hidden">
//                     <button onClick={() => setMenuOpen(!menuOpen)}>
//                         {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu (Visible only when menu is open) */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white border-t shadow-md py-4">
//                     <div className="flex flex-col items-center gap-4">
//                         <div className="w-[90%] flex">
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 value={searchInput}
//                                 onChange={(e) => setSearchInput(e.target.value)}
//                                 className="border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:outline-none text-lg"  
//                             />
//                             <button
//                                 className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
//                                 onClick={handleSearch}
//                             >
//                                 Search
//                             </button>
//                         </div>
//                         <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg w-[90%] text-center">
//                             Log In
//                         </Link>
//                         <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg w-[90%] text-center">
//                             Sign Up
//                         </Link>
//                         <Link to="/addcart" className="text-3xl"> 🛒 </Link>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;














// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi"; // Icons for Menu Toggle

// const Navbar = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (searchInput.trim() !== '') {
//             navigate(`/search?query=${searchInput}`);
//         }
//     };

//     return (
//         <div className="bg-white shadow-md w-full">
//             <div className="flex items-center justify-between h-20 px-4 md:px-8 w-full">
                
//                 {/* Left Side - Logo */}
//                 <div className="flex-shrink-0">
//                     <h1 className="text-2xl font-bold">
//                         <Link to="/" className="text-[#39b75d]">Megaminds</Link>
//                     </h1>
//                 </div>

//                 {/* Desktop Search Bar */}
//                 <div className="hidden md:flex justify-center flex-grow">
//                     <div className="flex w-[700px] max-w-full">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchInput}
//                             onChange={(e) => setSearchInput(e.target.value)}
//                             className="border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:outline-none text-lg"  
//                         />
//                         <button
//                             className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
//                             onClick={handleSearch}
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Side - Buttons (Desktop) */}
//                 <div className="hidden md:flex items-center gap-4">
//                     <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Log In</Link>
//                     <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg">Sign Up</Link>
//                     <Link to="/addcart" className="text-3xl px-2"> 🛒 </Link>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden">
//                     <button onClick={() => setMenuOpen(!menuOpen)}>
//                         {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Search Bar (Hamesha Visible) */}
//             <div className="md:hidden px-4 py-2">
//                 <div className="flex w-full">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchInput}
//                         onChange={(e) => setSearchInput(e.target.value)}
//                         className="border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:outline-none text-lg"  
//                     />
//                     <button
//                         className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
//                         onClick={handleSearch}
//                     >
//                         Search
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white border-t shadow-md py-4">
//                     <div className="flex flex-col items-center gap-4">
//                         <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg w-[90%] text-center">
//                             Log In
//                         </Link>
//                         <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg w-[90%] text-center">
//                             Sign Up
//                         </Link>
//                         <Link to="/addcart" className="text-3xl"> 🛒 </Link>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;








import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for Menu Toggle

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchInput.trim() !== '') {
            navigate(`/search?query=${searchInput}`);
        }
    };

    return (
        <div className="bg-white shadow-md w-full">
            <div className="flex items-center justify-between h-20 px-4 md:px-6 lg:px-8 w-full">
                
                {/* Left Side - Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold">
                        <Link to="/" className="text-[#39b75d]">Megaminds</Link>
                    </h1>
                </div>

                {/* Search Bar (Fixed for Tablet View) */}
                <div className="hidden md:flex justify-center flex-grow max-w-[500px] lg:max-w-[700px]">
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:outline-none text-lg"  
                        />
                        <button
                            className="bg-[#39b75d] text-white px-4 md:px-6 py-2 rounded-r-lg"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Right Side - Buttons (Fix for 773px to 921px) */}
                <div className="hidden md:flex items-center gap-2 lg:gap-4">
                    <Link to="/login" className="bg-[#39b75d] text-white px-4 md:px-5 lg:px-6 py-2 rounded-lg">Log In</Link>
                    <Link to="/signup" className="bg-[#39b75d] text-white px-4 md:px-5 lg:px-6 py-2 rounded-lg">Sign Up</Link>
                    <Link to="/addcart" className="text-2xl md:text-3xl px-2"> 🛒 </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar (Always Visible for Small Screens) */}
            <div className="md:hidden px-4 py-2">
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="border border-gray-300 rounded-l-lg py-2 px-4 w-full focus:outline-none text-lg"  
                    />
                    <button
                        className="bg-[#39b75d] text-white px-6 py-2 rounded-r-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-md py-4">
                    <div className="flex flex-col items-center gap-4">
                        <Link to="/login" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg w-[90%] text-center">
                            Log In
                        </Link>
                        <Link to="/signup" className="bg-[#39b75d] text-white px-6 py-2 rounded-lg w-[90%] text-center">
                            Sign Up
                        </Link>
                        <Link to="/addcart" className="text-3xl"> 🛒 </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";

// const SearchResults = () => {
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const searchTerm = queryParams.get("query");

//     useEffect(() => {
//         const fetchResults = async () => {
//             try {
//                 if (searchTerm) {
//                     const response = await axios.get(`http://localhost:4000/search/searchget?tags=${searchTerm}`);
//                     setResults(response.data);
//                 } else {
//                     setResults([]);
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.error("🔥 Error fetching search results:", error);
//                 setError("Failed to load search results.");
//                 setLoading(false);
//             }
//         };
//         fetchResults();
//     }, [searchTerm]);

//     const handleResultClick = (resultId) => {
//         navigate(`/search/${resultId}`); // ✅ Navigate to product detail page
//     };

//     if (loading) return <div className="text-center text-gray-500">Loading...</div>;
//     if (error) return <div className="text-red-500 text-center">{error}</div>;

//     return (
//         <div className="container mx-auto my-8">
//             <h2 className="text-2xl font-bold mb-3">Search Results</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
//                 {results.length > 0 ? (
//                     results.map((item) => (
//                         <div
//                             key={item._id}  
//                             className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full" 
//                             onClick={() => handleResultClick(item._id)}
//                         >
//                             <div className="h-80 w-full flex items-center justify-center overflow-hidden"> 
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="h-full w-full object-cover object-center"  // object-center to keep the focus centered
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <h2 className="text-black text-lg font-bold">{item.name}</h2>
//                                 <p className="text-2xl text-black font-bold mt-2">₹{item.price}</p> {/* Added margin-top between name and price */}
//                                 {item.rating ? (
//                                     <p className="text-black mt-2 text-lg">⭐ {item.rating}</p> // Rating in black with better styling
//                                 ) : null}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     searchTerm && <p className="text-gray-500 mt-4">No results found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SearchResults;

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("query");

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (searchTerm) {
                    const response = await axios.get(`https://megaminds-project-1uqo.vercel.app/search/searchget?tags=${searchTerm}`);
                    setResults(response.data);
                } else {
                    setResults([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("🔥 Error fetching search results:", error);
                setError("Failed to load search results.");
                setLoading(false);
            }
        };
        fetchResults();
    }, [searchTerm]);

    const handleResultClick = (resultId) => {
        navigate(`/search/${resultId}`);
    };

    if (loading) return <div className="text-center text-gray-500">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {results.length > 0 ? (
                    results.map((item) => (
                        <div
                            key={item._id}
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={() => handleResultClick(item._id)}
                        >
                            {/* Adjusting the image height and centering */}
                            <div className="h-96 w-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center"  // Centering the image
                                />
                            </div>
                            <hr className="border-gray-300 my-2" />
                            <div className="p-4">
                                {/* Name */}
                                <h3 className="text-black text-lg font-bold mb-2">{item.name}</h3>

                                {/* Price */}
                                <div className="text-lg text-black-600 font-bold mb-2">
                                    RS {item.price}
                                </div>

                                {/* Rating */}
                                {item.rating && (
                                    <div className="flex items-center">
                                        {/* Render the stars */}
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill={index < item.rating ? "gold" : "gray"} // Gold for filled, gray for empty
                                                className={`bi bi-star-fill ${index < item.rating ? 'font-bold' : ''}`} // Make filled stars bold
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.39.215-.846-.045-.846-.474V10.52l-3.567-3.048c-.334-.286-.161-.786.283-.868l4.472-.69 1.452-4.464c.128-.394.516-.394.644 0l1.451 4.464 4.472.69c.444.082.616.582.283.868l-3.567 3.048v4.45c0 .43-.457.688-.846.474l-4.017-2.283-4.018 2.283z" />
                                            </svg>
                                        ))}
                                        {/* Display the rating number next to the stars */}
                                        <span className="ml-2 text-black text-sm font-semibold">{item.rating}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    searchTerm && <p className="text-gray-500 mt-4">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;

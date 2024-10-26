import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchTerm }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (searchTerm) {
                    const response = await axios.get(`http://localhost:4000/search/searchget?tags=${searchTerm}`);
                    setResults(response.data);
                } else {
                    setResults([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setError("Failed to load search results.");
                setLoading(false);
            }
        };
        fetchResults();
    }, [searchTerm]);

    const handleResultClick = (resultId) => {
        navigate(`/result/${resultId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-3">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
                {results.length > 0 ? (
                    results.map((item) => (
                        <div
                            key={item.id} 
                            className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full" 
                            onClick={() => handleResultClick(item.id)}
                        >
                            <div className="h-64 w-full flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-contain" 
                                />
                            </div>
                            <hr className="border-gray-300 my-2" />
                            <div className="p-4">
                                {/* <h3 className="text-black text-lg font-bold">{item.name}</h3> */}
                                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                                <p className="text-gray-600 text-sm line-clamp-2">{item.price}</p>

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

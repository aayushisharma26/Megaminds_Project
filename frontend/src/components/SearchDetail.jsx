import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SearchDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchSearchDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/search/searchbyid/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.error("🔥 Error fetching product details:", error);
            }
        };

        fetchSearchDetail();
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(product);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        alert("✅ Product added to cart!");
    };

    const handleBuyNow = () => {
        if (!product) return;
        localStorage.setItem("checkoutProduct", JSON.stringify(product));
        navigate("/checkout");
    };

    return (
        <div className="container mx-auto my-16 px-6">
            {product && (
                <div className="flex flex-col md:flex-row items-center md:items-start p-8">
                    
                    {/* Product Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="relative w-full h-[600px] max-h-[600px] overflow-hidden rounded-xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 p-6 rounded-lg h-[450px] flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 mt-3 text-lg">{product.description}</p>
                            <p className="text-2xl font-semibold text-red-500 mt-3">₹{product.price}</p>
                            {product.rating && (
                                <p className="text-yellow-500 mt-2">⭐ {product.rating} / 5</p>
                            )}
                            <p className="text-gray-600 mt-2">Category: <span className="font-medium text-gray-800">{product.category?.name || "N/A"}</span></p>

                            {/* Extra Details */}
                            {product.extraDetails && (
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold text-gray-700">Product Details:</h3>
                                    <ul className="list-disc ml-5 mt-2 text-gray-600">
                                        {Object.entries(product.extraDetails).map(([key, value]) => (
                                            <li key={key}><strong>{key}:</strong> {value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button 
                                className="border border-gray-400 text-gray-700 px-6 py-3 text-base rounded-md hover:bg-gray-100 transition-all"
                                onClick={handleAddToCart}
                            >
                                🛒 Add to Cart
                            </button>

                            <button 
                                className="border border-gray-400 text-gray-700 px-6 py-3 text-base rounded-md hover:bg-gray-100 transition-all"
                                onClick={handleBuyNow}
                            >
                                ⚡ Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDetail;

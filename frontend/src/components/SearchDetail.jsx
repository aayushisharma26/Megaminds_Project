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
                console.error("Error fetching search item:", error);
            }
        };

        fetchSearchDetail();
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;

        // Existing cart data
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        // Add new product
        cartItems.push(product);

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cartItems));

        alert("Product added to cart!");
    };

    const handleBuyNow = () => {
        if (!product) return;

        // Store the selected product in localStorage for checkout
        localStorage.setItem("checkoutProduct", JSON.stringify(product));

        // Navigate to the checkout page
        navigate("/checkout");
    };

    return (
        <div className="container mx-auto my-24">
            {product && (
                <div className="bg-white rounded-xl shadow-2xl p-8">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                        {/* Product Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[500px] object-contain rounded-xl"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
                            <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-xl font-bold mb-4">₹{product.price}</p>
                            <p className="text-gray-700">Category: {product.category?.name || "N/A"}</p>

                            {/* Add to Cart Button */}
                            <button 
                                className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 mr-4"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>

                            {/* Buy Now Button */}
                            <button 
                                className="mt-6 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                                onClick={handleBuyNow}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDetail;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();  

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Handle removing an item from the cart
    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(item => item._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));  // Update localStorage
    };

    // Handle Buy Now button click (for example, navigate to checkout or product details)
    const handleBuyNow = (id) => {
        navigate(`/checkout/${id}`);  // Assuming `/checkout/:id` for checkout
    };

    // Handle item click to go to product details page
    const handleItemClick = (id) => {
        navigate(`/search/${id}`);
    };

    return (
        <div className="container mx-auto my-6 px-6">
            <h2 className="text-xl font-semibold mb-8 text-center text-gray-600">🛒 Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">Your cart is empty. Add some products! 🛍️</p>
            ) : (
                <div className="flex flex-col items-center gap-8 w-full max-w-[1100px] mx-auto">
                    {cartItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-md rounded-lg p-6 w-full max-w-[1100px] h-[300px] flex flex-col md:flex-row items-center border border-gray-200"
                        >
                            {/* Product Image (No Border, Bigger Size) */}
                            <div className="w-full md:w-1/3 flex justify-center" onClick={() => handleItemClick(item._id)}>
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-64 h-64 object-contain rounded-lg cursor-pointer"
                                />
                            </div>

                            {/* Product Details (Well-Spaced & Lighter Font) */}
                            <div className="w-full md:w-2/3 md:ml-8 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500 mt-2 text-base">{item.description}</p>
                                    <p className="text-2xl font-semibold text-red-500 mt-2">₹{item.price}</p>
                                </div>

                                {/* Buttons (Compact & Minimal Style) */}
                                <div className="mt-4 flex gap-4 justify-start">
                                    <button 
                                        className="border border-gray-400 text-gray-700 px-6 py-3 text-base rounded-md hover:bg-gray-100 transition-all"
                                        onClick={() => handleRemove(item._id)} // Remove item from cart
                                    >
                                        ❌ Remove
                                    </button>
                                    <button 
                                        className="border border-gray-400 text-gray-700 px-6 py-3 text-base rounded-md hover:bg-gray-100 transition-all"
                                        onClick={() => handleBuyNow(item._id)} // Navigate to Buy Now page
                                    >
                                        ✅ Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddToCart;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();  

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const handleItemClick = (id) => {
        navigate(`/search/${id}`);
    };

    return (
        <div className="container mx-auto my-24">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">No items in cart.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-md rounded-lg p-4 cursor-pointer" 
                            onClick={() => handleItemClick(item._id)}  
                        >
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-40 object-contain rounded-md" 
                            />
                            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            <p className="text-lg font-bold mt-2">₹{item.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddToCart;

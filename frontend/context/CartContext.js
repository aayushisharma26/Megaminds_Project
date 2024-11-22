import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Fetch cart items from API
    const fetchCart = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/cart/items");
            setCart(response.data.cart); // Assuming API response contains cart items in `cart` property
        } catch (error) {
            console.error("Failed to fetch cart items:", error.message);
        }
    };

    // Add product to the cart
    const addToCart = async (productId, quantity = 1) => {
        try {
            const response = await axios.post("http://localhost:4000/api/cart/add", {
                userId: "mockUserId", // Replace with actual userId from authentication
                productId,
                quantity,
            });
            setCart(response.data.cart); // Assuming updated cart is returned
        } catch (error) {
            console.error("Failed to add product to cart:", error.message);
        }
    };

    // Remove product from the cart
    const removeFromCart = async (productId) => {
        try {
            const updatedCart = cart.filter((item) => item.productId !== productId);
            setCart(updatedCart);
        } catch (error) {
            console.error("Failed to remove product from cart:", error.message);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

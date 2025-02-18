import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://megaminds-project-1uqo.vercel.app/product/products/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };

        fetchProduct();
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
        <div className="container mx-auto my-0 md:my-16 px-6">
            {product && (
                <div className="flex flex-col md:flex-row items-center md:items-start p-8">
                    
                    {/* Product Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[450px] object-contain rounded-xl shadow-md"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 mt-0 md:mt-0 md:ml-12 p-6 rounded-lg h-[350px] flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 mt-6 text-lg">{product.description}</p>
                            <p className="text-2xl font-semibold text-lack-500 mt-5">₹{product.price}</p>
                            <p className="text-gray-600 mt-5">Category: <span className="font-medium text-gray-800">{product.category?.name || "N/A"}</span></p>
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

export default ProductDetail;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/product/getBYId/${id}`);
                setProduct(response.data.product);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product", error);
                setError("Failed to load product.");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>No product found.</div>; // Check for product existence

    return (
        <div className="container mx-auto my-24">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side: Product Image */}
                    <div className="w-full md:w-1/2 max-w-lg">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-80 object-contain rounded-lg shadow-md" // Larger image with shadow and rounded corners
                        />
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
                        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-xl font-bold mb-4">${product.price}</p>
                        <p className="text-gray-700">Category: {product.category?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

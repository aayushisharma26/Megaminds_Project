import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/product/products/${id}`);
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
    return (
        <div className="container mx-auto my-24">
            <div className="bg-white rounded-xl shadow-2xl p-8"> 
                <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className="w-full md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[500px] object-contain rounded-xl" 
                        />
                    </div>

                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
                        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-xl font-bold mb-4">${product.price}</p>
                        <p className="text-gray-700">Category: {product.category?.name}</p>

                        <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

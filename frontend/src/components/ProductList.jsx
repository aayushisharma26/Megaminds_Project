import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('megaminds-project.vercel.app/product/productGet');
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          throw new Error("Unexpected response structure");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Our Most Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleProductClick(product._id)} // Navigate when clicked
          >
            <div className="h-64 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            <hr className="border-gray-300 my-2" />
            <div className="p-4">
              <div className="text-xs text-blue-600 font-bold mb-2">
                {"BUY 1@RS " + product.price}
              </div>
              <h3 className="text-black text-lg font-bold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

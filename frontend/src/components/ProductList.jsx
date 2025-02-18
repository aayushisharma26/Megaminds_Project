import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://megaminds-project-1uqo.vercel.app/product/products');
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to load products.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-8 px-4 md:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Our Most Popular Products</h2>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <div className="h-64 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            <hr className="border-gray-300 my-1" />
            <div className="p-4">
              <h1 className="text-black text-2xl font-bold mb-2">{product.name}</h1>
              <div className="text-xl text-black-600 font-bold mb-2">
                {"RS " + product.price}
              </div>

              {/* Rating Section - Just Stars */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={index < product.rating ? "gold" : "yellow"}
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.39.215-.846-.045-.846-.474V10.52l-3.567-3.048c-.334-.286-.161-.786.283-.868l4.472-.69 1.452-4.464c.128-.394.516-.394.644 0l1.451 4.464 4.472.69c.444.082.616.582.283.868l-3.567 3.048v4.45c0 .43-.457.688-.846.474l-4.017-2.283-4.018 2.283z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

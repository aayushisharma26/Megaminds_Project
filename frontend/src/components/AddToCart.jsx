import React from 'react';
import { FaStar } from 'react-icons/fa'; 

const AddToCart = () => {
  return (
    <div className="max-w-7xl w-full mx-auto border rounded-lg shadow-lg overflow-hidden py-6 mt-7 min-h-[100px]">
      <div className="flex">
        <div className="w-3/6 p-4">
          <img
            src="https://m.media-amazon.com/images/I/71kcHw6TMeL._AC_SY741_.jpg"
            alt="Product"
            className="w-full h-[200px] object-contain"
          />
        </div>

        <div className="w-3/6 p-4">
          <h1 className="text-xl font-semibold mb-2">Amazing Product</h1>
          <p className="text-md text-gray-500 mb-4">Price: ₹500</p>
          <p className="text-md text-gray-500 mb-4">
            This product is perfect for your needs. Durable, affordable, and highly rated!
          </p>
          <button
            className="mt-12 w-40 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigating to the Home page

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectedScanner, setSelectedScanner] = useState(null); 
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State for success message

  const navigate = useNavigate(); // Hook to navigate to the home page after successful payment

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedProduct = localStorage.getItem("checkoutProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setSelectedScanner(null); 
  };

  const handleOrderNow = () => {
    // Set payment success state and navigate after some time
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate("/"); // Redirect to homepage
    }, 2000); // Wait 2 seconds before redirecting
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-2xl mt-12 border mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Order Summary
      </h2>
      
      {/* User Details */}
      {user ? (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p className="text-red-500 text-center">Please login to continue.</p>
      )}

      <hr className="my-6 border-gray-300" />

      {/* Product Details */}
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Product Details</h3>
      {product ? (
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-700"><strong>Product:</strong> {product.name}</p>
          <p className="text-gray-700"><strong>Price:</strong> ₹{product.price}</p>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No product selected.</p>
      )}

      <hr className="my-6 border-gray-300" />

      {/* Payment Method */}
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Select Payment Method</h3>
      <div className="space-y-4">
        <label className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
          <input type="radio" value="COD" checked={paymentMethod === "COD"} onChange={handlePaymentChange} className="w-5 h-5" />
          <span className="text-lg">Cash on Delivery</span>
        </label>
        <label className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
          <input type="radio" value="Online" checked={paymentMethod === "Online"} onChange={handlePaymentChange} className="w-5 h-5" />
          <span className="text-lg">Online Payment</span>
        </label>
      </div>

      {/* Online Payment Options */}
      {paymentMethod === "Online" && selectedScanner === null && (
        <div className="mt-6 flex justify-center space-x-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gCS2hj5_Yn3m5KNYp09JXfHcuTWjrstpCg&s"
            alt="Google Pay"
            className="w-16 h-16 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedScanner("GooglePay")}
          />
          <img
            src="https://i.pinimg.com/736x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg"
            alt="PhonePe"
            className="w-16 h-16 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedScanner("PhonePe")}
          />
        </div>
      )}

      {/* Scanner Display */}
      {selectedScanner && (
        <div className="mt-6 flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Scan to Pay with {selectedScanner}
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"
            alt={`${selectedScanner} QR Code`}
            className="w-40 h-40 border p-2 bg-gray-100 rounded-lg"
          />
        </div>
      )}

      {/* Success Message */}
      {paymentSuccess && (
        <div className="mt-6 p-4 bg-green-100 text-center text-green-600 rounded-lg">
          Payment Successfully Done! Redirecting to homepage...
        </div>
      )}

      {/* Order Now Button */}
      <button
        onClick={handleOrderNow}
        className="w-full mt-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
      >
        Order Now
      </button>
    </div>
  );
};

export default Checkout;

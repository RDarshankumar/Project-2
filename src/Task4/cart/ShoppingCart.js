import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import SecurePayment from "../SecurePayment";
import { SavedItem } from "../saveditems/SavedItem";
import PromotionBanner from "../../Task3/Banner/PromotionBanner";
import Footer from "../../Components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    IBN: "",
    name: "",
    address: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    const initialQuantities = {};
    storedCart.forEach((item, index) => {
      initialQuantities[index] = 1; // Default quantity is 1
    });
    setQuantities(initialQuantities);
  }, []);

  const handleQuantityChange = (index, value) => {
    const updatedQuantities = { ...quantities, [index]: parseInt(value) };
    setQuantities(updatedQuantities);
  };

  const calculatePrice = (price, quantity) => price * quantity;

  const getTotalPrice = () => {
    return cart.reduce((total, item, index) => {
      return total + calculatePrice(item.price, quantities[index]);
    }, 0);
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[index];
    setCart(updatedCart);
    setQuantities(updatedQuantities);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePlaceOrder = () => {
    setShowPaymentMethods(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentMethods(false);
    setShowPaymentDetails(true);
  };

  const handlePaymentDetailsSubmit = () => {
    setShowPaymentDetails(false);
    setShowOrderSuccess(true);
    setTimeout(() => setShowOrderSuccess(false), 3000); // Auto-close the popup after 3 seconds
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  const handleOrder = (cart) => {
    navigate("/Order", {
      state: {
        cart,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                      <label
                        htmlFor={`quantity-${index}`}
                        className="text-sm text-gray-600"
                      >
                        Qty:
                      </label>
                      <select
                        id={`quantity-${index}`}
                        value={quantities[index] || 1}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                        className="border border-gray-300 p-1 rounded"
                      >
                        {[1, 2, 3, 4, 5, 6].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold text-red-500">
                      $
                      {calculatePrice(
                        item.price,
                        quantities[index] || 1
                      ).toFixed(2)}
                    </p>
                    <button
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar for Grand Total */}
        {cart.length > 0 && (
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h3 className="text-xl font-semibold mb-4">Grand Total</h3>
            <p className="text-lg font-bold text-red-500">
              ${getTotalPrice().toFixed(2)}
            </p>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
      {/* Payment Methods Popup */}
      {showPaymentMethods && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPaymentMethods(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
            <ul className="space-y-2">
              {["Easypaisa", "JazzCash", "Paypal", "Bank"].map((method) => (
                <li key={method}>
                  <button
                    className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
                    onClick={() => handlePaymentMethodSelect(method)}
                  >
                    {method}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      // Payment Details Popup
      {showPaymentDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPaymentDetails(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                if (
                  paymentDetails.IBN &&
                  paymentDetails.name &&
                  paymentDetails.address
                ) {
                  handlePaymentDetailsSubmit();
                } else {
                  alert("Please fill in all fields.");
                }
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="IBN"
                placeholder="IBN"
                value={paymentDetails.IBN}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={paymentDetails.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={paymentDetails.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <div className="flex justify-between">
                <p className="font-semibold">Total Amount:</p>
                <p>${getTotalPrice().toFixed(2)}</p>
              </div>
              {/* Button to trigger order submission */}
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                onClick={() => handleOrder(cart)} // Pass the whole item
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Order Success Popup */}
      {showOrderSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-green-500 mb-4">
              <svg
                className="w-12 h-12 mx-auto animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2l4-4m-6 6a9 9 0 1 0 0-18a9 9 0 0 0 0 18z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold">
              Order Submitted Successfully!
            </p>
          </div>
        </div>
      )}
      <SecurePayment />
      <SavedItem />
      <PromotionBanner />
      <Footer />
    </>
  );
};

export default ShoppingCart;

// src/components/Payment.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const totalAmount = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert("Payment Successful!");
    navigate("/"); // Redirect to home or confirmation page after payment
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-purple-800">Payment</h2>
        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              id="expiryDate"
              name="expiryDate"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div className="text-lg font-semibold text-gray-700">
            Total Amount: ${totalAmount.toFixed(2)}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

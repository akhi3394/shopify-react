// src/components/Cart.jsx
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import CartItem from "../components/cartitems";
import { emptyCart } from "../redux/Slices/cartSlice";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const handleCheckout = () => {
    navigate("/payment");
    enqueueSnackbar("Redirecting to payment page...", { variant: "info" });
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
    enqueueSnackbar("Cart has been emptied!", { variant: "success" });
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto p-4">
          <div className="flex flex-col justify-center items-between p-2">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
            <h1 className="font-semibold text-2xl text-purple-800">YOUR CART SUMMARY</h1>
            <p>
              <span className="text-gray-700 font-semibold">Total Items</span>: {cart.length}
            </p>
            <p>
              <span className="text-gray-700 font-semibold">Total Amount</span>: ${totalAmount.toFixed(2)}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleCheckout}
                className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear border-2 border-purple-600 font-bold hover:text-purple-700 p-3"
              >
                Checkout Now
              </button>
              <button
                onClick={handleEmptyCart}
                className="bg-red-600 hover:bg-red-50 rounded-lg text-white transition duration-300 ease-linear border-2 border-red-600 font-bold hover:text-red-600 p-3"
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <Link to="/">
            <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
